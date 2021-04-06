import Tool from './Tool';

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas)
    this.listen()
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseUpHandler(e) {
    this.mouseDown = false
  }

  mouseDownHandler(e) {
    const { x, y } = this.getCoordinates(e)
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      const { x, y } = this.getCoordinates(e)
      this.draw(x, y)
    }
  }

  draw(x, y) {
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
    console.log(x, y)
  }
}