import Tool from './Tool';

export default class Line extends Tool {
  constructor(canvas, toolState) {
    super(canvas, toolState);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmouseout = this.mouseOutHandler.bind(this);
  }

  mouseOutHandler(e) {
    this.mouseDown = false;
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  mouseDownHandler(e) {
    const { x, y } = Tool.getCoordinates(e);
    this.startX = x;
    this.startY = y;
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e) {
    const { x, y } = Tool.getCoordinates(e);
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);

    if (this.mouseDown) {
      if (e.shiftKey) {
        this.drawRadius(x, y);
      } else {
        this.draw(x, y);
      }
    }
  }

  drawRadius(x, y) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  draw(x, y) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    };
  }
}
