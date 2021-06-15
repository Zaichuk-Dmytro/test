export default class Comnponent {
  constructor({ element }){
    this._element = element;
  }

  hide() {
    this._element.hidden = true;
  }

  show() {
    this._element.hidden = false;
  }
} 