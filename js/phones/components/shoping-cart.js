import Comnponent from "./component.js";

export default class PhoneCart extends Comnponent {
  constructor ({ element }) {
    super({ element })
    this._cartsArr= [];
    this._render();

  }
  showNewListCart(phoneName) {
    this._cartsArr.push(phoneName.name)
   
    this._render()
  }

  _render() {
   this._element.innerHTML = `
    <p class="shoping-cart-name">Shopping Cart</p>
    <ul class="shopping-cart-items">
      ${this._cartsArr.map(el => `<li class="shopping-cart-item"><span>${el}</span><span>1</span></li>`).join('')}
    </ul>` 
      
  }
}
//<img src="img/korz.png">