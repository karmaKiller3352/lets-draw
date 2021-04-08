import Tool from './Tool';

export default class Rect extends Tool {
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

    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      const { x, y } = Tool.getCoordinates(e);
      const width = x - this.startX;
      const height = y - this.startY;

      if (e.shiftKey) {
        this.drawSquare(this.startX, this.startY, width);
      } else {
        this.draw(this.startX, this.startY, width, height);
      }
    }
  }

  drawSquare(x, y, w) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.rect(x, y, w, w);
      this.ctx.stroke();
    };
  }

  draw(x, y, w, h) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();

      this.ctx.rect(x, y, w, h);
      this.ctx.stroke();
    };
  }
}
