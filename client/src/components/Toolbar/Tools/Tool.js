export default class Tool {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.destroyEvents()
  }

  getCoordinates(e) {
    return {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    }
  }

  destroyEvents() {
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
  }
}