import Comnponent from "./component.js";

export default class PhoneViewer extends Comnponent{
  constructor({ element }) {
    super({ element });
     
    this.on('click', '[data-element="button-back"]', () => {
      this.emit('back')
    })

    this.on('click', '[data-element="small-preview"]', (event) => {
      let bigImgSrc = this._element.querySelector('[data-element="big-preview"]')
      bigImgSrc.src = event.target.src
    })

    this.on('click', '[data-element="button-add"]', (event) => {
      let phoneName = this._phoneDetails.name
      this.emit('add', phoneName)  
    })
  }
   
  show(phoneDetails) {
    this._phoneDetails = phoneDetails;
    this._render();
    super.show();
    
  } 

  _render() {
    this._element.innerHTML =`
      <img
      data-element="big-preview"
      class="phone"
      src="${this._phoneDetails.images[0]}"
      alt="Motorola XOOM™ with Wi-Fi"
      />

      <button data-element="button-back" type="button">Back</button>
      <button  data-element="button-add" type="button" >Add to basket</button>

      <h1>${this._phoneDetails.name}</h1>

      <p>
        Motorola XOOM with Wi-Fi has a super-powerful dual-core processor
        and Android™ 3.0 (Honeycomb) — the Android platform designed
        specifically for tablets. With its 10.1-inch HD widescreen display,
        you’ll enjoy HD video in a thin, light, powerful and upgradeable
        tablet.
      </p>

      <ul class="phone-thumbs">
        ${this._phoneDetails.images.map(imageUrl => `
        <li>
          <img src="${imageUrl}" alt="" data-element="small-preview"/>
        </li>`
        
        ).join('')
      }  
        
      </ul>
      `
  }
}