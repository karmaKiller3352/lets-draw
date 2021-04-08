export default class Tool {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.destroyEvents();
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
    this.canvas.onmouseout = null;
  }

  static getCoordinates(e) {
    return {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop,
    };
  }

  set strokeColor(color) {
    this.ctx.strokeStyle = color;
  }

  set strokeWidth(width) {
    this.ctx.lineWidth = width;
  }

  get strokeColor() {
    return this.ctx.strokeStyle;
  }

  get strokeWidth() {
    return this.ctx.lineWidth;
  }
}
