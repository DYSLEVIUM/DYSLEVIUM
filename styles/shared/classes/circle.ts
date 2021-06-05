import Vector from './vector';

export default class Circle {
  constructor(
    public ctx: CanvasRenderingContext2D,
    private pos: Vector,
    private speed: Vector,
    private radius: number,
    private color: string
  ) {}

  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update(): void {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    if (
      this.pos.x + this.radius > this.ctx.canvas.width ||
      this.pos.x - this.radius < 0
    ) {
      this.speed.x *= -1;
    }

    if (
      this.pos.y + this.radius > this.ctx.canvas.height ||
      this.pos.y - this.radius < 0
    ) {
      this.speed.y *= -1;
    }
    this.draw();
  }
}
