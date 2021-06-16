export default class Comnponent {
  constructor({ element }){
    this._element = element;
    this._callbackMap = {};
  }
  
  on(eventName, selector,callback) {
    this._element.addEventListener(eventName, (event) => {
      let delegaterTarget = event.target.closest(selector);
      if(!delegaterTarget) {
        return;
      }
      callback(event)
    })
  }

  emit(eventName, data) {
    let callback = this._callbackMap[eventName];
    if (!callback) {
      return;
    }
    callback(data);
  }

  subscribe(eventName, callback) {
    this._callbackMap[eventName] = callback
  }

  hide() {
    this._element.hidden = true;
  }

  show() {
    this._element.hidden = false;
  }
} 