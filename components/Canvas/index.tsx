import React, { useEffect, useRef } from 'react';

import styles from './Canvas.module.scss';

interface vector {
	x: number;
	y: number;
}

interface Ball {
	pos: vector;
	radius: number;
	animationOffset: number;
}

const Canvas = () => {
	const canvasRef = useRef(null);

	let objects: Ball[] = [];
	let totalParticles = 10;

	const targetFps = 1;

	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#ffffff07';

		objects.forEach((object) => {
			ctx.beginPath();
			ctx.arc(
				object.pos.x,
				object.pos.y,
				20 * Math.sin(frameCount * 0.01 + object.animationOffset) ** 2,
				0,
				2 * Math.PI
			);
			ctx.fill();
		});
	};

	const windowResized = (
		canvas: HTMLCanvasElement,
		context,
		animationFrameId,
		render,
		timeoutId
	) => {
		//	high pixel density devices
		const { devicePixelRatio: ratio = 1 } = window;

		canvas.width = canvas.getBoundingClientRect().width * ratio;
		canvas.height = canvas.getBoundingClientRect().height * ratio;

		context.scale(ratio, ratio);

		if (canvas.width <= 800 && animationFrameId != null) {
			window.cancelAnimationFrame(animationFrameId);
			animationFrameId = null;
		} else {
			//	deleting the previous animationFrameId if it exists
			if (animationFrameId != null) {
				window.cancelAnimationFrame(animationFrameId);
				clearTimeout(timeoutId);
				timeoutId = null;
			}

			//	new animationFrameId
			animationFrameId = window.requestAnimationFrame(render);
			render();
		}
	};

	const makeObjects = (width: number, height: number) => {
		for (let i = 0; i < totalParticles; ++i) {
			let newBall: Ball = {
				pos: { x: Math.random() * width, y: Math.random() * height },
				radius: Math.random() * 30,
				animationOffset: Math.random() * 100,
			};
			objects.push(newBall);
		}
	};

	useEffect(() => {
		const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;

		const context = canvas.getContext('2d');
		let animationFrameId = null;
		let frameCount = 0;
		let timeoutId;

		// totalParticles += Math.ceil(
		// 	(canvas.getBoundingClientRect().width *
		// 		canvas.getBoundingClientRect().height) /
		// 		300000
		// );

		makeObjects(
			canvas.getBoundingClientRect().width,
			canvas.getBoundingClientRect().height
		);

		const render = () => {
			++frameCount;

			draw(context, frameCount);
			timeoutId = () => {
				animationFrameId = window.requestAnimationFrame(render);
			};
			setTimeout(timeoutId, 1 / (targetFps / 1000));
			console.log(1 / (targetFps / 1000));
			console.log(timeoutId);
		};

		const windowResizedEvent = () => {
			windowResized(canvas, context, animationFrameId, render, timeoutId);
			objects = [];
			makeObjects(
				canvas.getBoundingClientRect().width,
				canvas.getBoundingClientRect().height
			);
		};

		window.addEventListener('resize', windowResizedEvent);

		//	initial call
		windowResized(canvas, context, animationFrameId, render, timeoutId);

		return () => {
			if (animationFrameId != null)
				window.cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', windowResizedEvent);
			clearTimeout(timeoutId);
		};
	}, []);

	return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default Canvas;
