import Comnponent from "./component.js";

export default class PhoneCart extends Comnponent {
  constructor ({ element }) {
    super({ element })
    this._cartsArr = []
    this._carsObj = {}
    
    this.on('click', '[data-element="buttonPlus"]', (event) => {
      let idObj = event.target.getAttribute('idPhone')
      ++this._carsObj[idObj]
      this._render()
    })

    this.on('click', '[data-element="buttonX"]', (event) => {
      delete this._carsObj[event.target.getAttribute('idPhone')]
      this._render()
    })

    this.on('click', '[data-element="buttonMinus"]', (event) => {
      let idObj = event.target.getAttribute('idPhone')
      --this._carsObj[idObj]
      if (!this._carsObj[idObj]) {
        delete this._carsObj[idObj]
      }
      this._render()
    })

    this._render();
  }

  showNewListCart(phoneName) {
  this._carsObj[phoneName] = (this._carsObj[phoneName] || 0) + 1
    this._render()
  }

  _render() {
   // console.log(this._cartsArr)
    this._element.innerHTML = `
      <p class="shoping-cart-name">Shopping Cart</p>
      <ul class="shopping-cart-items">
        ${[...Object.entries(this._carsObj)].map(el => `<li class="shopping-cart-item"><span>${el[0]}</span><span><button idPhone="${el[0]}" data-element="buttonMinus">-</button> </span> <span> ${el[1]} </span><span><button idPhone="${el[0]}" data-element="buttonPlus">+</button><span><button idPhone="${el[0]}" data-element="buttonX">X</button></span></span></li>`).join('')}
      </ul>` 
  }
}
