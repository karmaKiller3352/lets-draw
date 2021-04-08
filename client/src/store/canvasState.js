import { makeAutoObservable } from 'mobx';

class CanvasState {
  canvas = null;
  wrapper = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }
}

export default new CanvasState();
