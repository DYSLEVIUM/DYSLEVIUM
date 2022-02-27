import React, { useRef, useEffect } from 'react';

import CanvasEle from './styles';
import { secondaryAccentColor } from '../../styles/variables';
import Circle from '../../styles/shared/classes/circle';
import Vector from '../../styles/shared/classes/vector';

const canvasMargin = 50;
const totalObjects = 25;
const speed = 0.75;

const circleMaxRadius = 50;

let canvasWidth = 0;
let canvasHeight = 0;
let objects: any[] = [];

const draw = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  objects.forEach((object) => {
    object.update();
  });
};

const resizeCanvas = (ctx: CanvasRenderingContext2D) => {
  canvasWidth = window.innerWidth + canvasMargin;
  canvasHeight = window.innerHeight + canvasMargin;

  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  objects = [];

  for (let i = 0; i < totalObjects; i += 1) {
    const dirX = Math.random() > 0.5 ? -1 : 1;
    const dirY = Math.random() > 0.5 ? -1 : 1;

    const dx = Math.random() * speed * dirX;
    const dy = Math.random() * speed * dirY;
    objects.push(
      new Circle(
        ctx,
        new Vector(
          Math.random() * canvasWidth - canvasMargin - circleMaxRadius,
          Math.random() * canvasHeight - canvasMargin - circleMaxRadius,
        ),
        new Vector(dx, dy),
        Math.random() * circleMaxRadius,
        `${`${secondaryAccentColor}10`}`,
      ),
    );
  }
};

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    let timeOutId;
    let animationFrameId;

    //  initial call
    resizeCanvas(ctx);

    const render = () => {
      draw(ctx);

      timeOutId = setTimeout(() => {
        animationFrameId = window.requestAnimationFrame(render);
      }, 30);
    };

    render();

    window.addEventListener('resize', () => {
      resizeCanvas(ctx);
    });

    return () => {
      window.removeEventListener('resize', () => {
        resizeCanvas(ctx);
      });

      window.cancelAnimationFrame(animationFrameId);

      clearTimeout(timeOutId);
    };
  }, []);

  return <CanvasEle ref={canvasRef} />;
};

export default Canvas;
