import React, { useEffect, useRef } from 'react';

import styles from './Canvas.module.scss';

const Canvas = () => {
	const canvasRef = useRef(null);

	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#ffffff07';
		ctx.beginPath();
		ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.005) ** 2, 0, 2 * Math.PI);
		ctx.fill();
	};

	const windowResized = (canvas: HTMLCanvasElement, context) => {
		//	high pixel density devices
		const { devicePixelRatio: ratio = 1 } = window;

		canvas.width = canvas.getBoundingClientRect().width * ratio;
		canvas.height = canvas.getBoundingClientRect().height * ratio;

		context.scale(ratio, ratio);
	};

	useEffect(() => {
		const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;

		const context = canvas.getContext('2d');
		let animationFrameId;
		let frameCount = 0;

		const windowResizedEvent = () => {
			windowResized(canvas, context);
		};

		window.addEventListener('resize', windowResizedEvent);

		const render = () => {
			++frameCount;
			draw(context, frameCount);
			animationFrameId = window.requestAnimationFrame(render);
		};

		//	initial call
		render();
		windowResized(canvas, context);

		return () => {
			window.cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', windowResizedEvent);
		};
	}, [draw]);

	return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default Canvas;
