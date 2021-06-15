import Comnponent from "./component.js";

export default class PhoneViewer extends Comnponent{
  constructor({
    element,
    buttonBack = () => {}
  }) {
    super({ element });
    this.buttonBack = buttonBack;
  }
  
  show(phoneDetails) {
    this._phoneDetails = phoneDetails;
    this._render();
    super.show();
    this._element.querySelector('[data-element="button-back"]').addEventListener('click', (event) => {
      this.buttonBack()
    })
  } 

  _render() {
    
    this._element.innerHTML =`
      <img
      class="phone"
      src="${this._phoneDetails.images[0]}"
      alt="Motorola XOOM™ with Wi-Fi"
      />

      <button data-element="button-back" type="button">Back</button>
      <button type="button">Add to basket</button>

      <h1>${this._phoneDetails.name}</h1>

      <p>
        Motorola XOOM with Wi-Fi has a super-powerful dual-core processor
        and Android™ 3.0 (Honeycomb) — the Android platform designed
        specifically for tablets. With its 10.1-inch HD widescreen display,
        you’ll enjoy HD video in a thin, light, powerful and upgradeable
        tablet.
      </p>

      <ul class="phone-thumbs">
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg" alt="" />
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg" alt="" />
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg" alt="" />
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg" alt="" />
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg" alt="" />
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg" alt="" />
        </li>
      </ul>
      `
  }
}