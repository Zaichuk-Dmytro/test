import Component from './component.js';
export default class PhonesCatalog extends Component{
  constructor({
    element,
    phones = [],
  }) {
    super({ element })
    this._phones = phones;
    this._render();

    this.on('click', '[data-element="datails-link"]', (event) => {
      let phoneEl = event.target.closest('[data-element="phone-element"]');
      let phoneId = phoneEl.dataset.phoneId;
      this.emit('phone-selected', phoneId)
    })
    
  }

   


  _render() {
    // console.log(this._element)
    this._element.innerHTML = `
      <ul class="phones">
      ${
        this._phones.map(phone => `
          <li class="thumbnail" data-element="phone-element" data-phone-id=${phone.id}>
            <a href="#!/phones/motorola-xoom-with-wi-fi" class="thumb" >
              <img alt="${phone.name}" src="${phone.imageUrl}" data-element="datails-link" />
            </a>

            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success" href="#buy">
                Add
              </a>
            </div>

            <a href="#!/phones/motorola-xoom-with-wi-fi" data-element="datails-link">${phone.name}</a>
            <p>${phone.snippet}</p>
          </li>
        `).join('')
      }
        
      </ul>`
  }
}