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
    if(!this._callbackMap[eventName]) {
      return
    }
    this._callbackMap[eventName].forEach(el => el(data))
  }

  subscribe(eventName, callback) {
    if (!this._callbackMap[eventName]) {
      this._callbackMap[eventName] = [];
    }
    this._callbackMap[eventName].push(callback);
  }

  unsubcribe(eventName, callbackToRemove) {
    this._callbackMap[eventName].map((el, index) => {
      if(el == callbackToRemove) {
        this._callbackMap[eventName].splice(index, 1)
      }
    })
  }

  hide() {
    this._element.hidden = true;
  }

  show() {
    this._element.hidden = false;
  }
} 