import Tool from './Tool';

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmouseout = this.mouseOutHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  mouseOutHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(e) {
    const { x, y } = Tool.getCoordinates(e);
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  mouseMoveHandler(e) {
    const { x, y } = Tool.getCoordinates(e);

    if (this.mouseDown) {
      this.draw(x, y);
    }
  }

  draw(x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
