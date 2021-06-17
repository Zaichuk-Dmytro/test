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
    
    this.on('click', '[data-element="button-add"]', (event) => {
      let phoneEl = event.target.closest('[data-element="phone-element"]')
      let phoneId = phoneEl.dataset.phoneId;
      this.emit('add', phoneId)
    })
  }

   


  _render() {
    this._element.innerHTML = `
      <ul class="catalog-phone">
      ${
        this._phones.map(phone => `
          <li class="phone-card" data-element="phone-element" data-phone-id=${phone.id}>
            <div class="phone-card-img">
              <a href="#!/phones/motorola-xoom-with-wi-fi"  >
                <img alt="" src="${phone.imageUrl}" data-element="datails-link" />
              </a>
            </div>
            <div class="phone-card-content">
              <a class="phone-card-name" href="#!/phones/motorola-xoom-with-wi-fi" data-element="datails-link">${phone.name}</a>
              <p class="phone-card-text" >${phone.snippet}</p>
              <div class="phone-card-action">
                <a class="phone-card-action-buy" href="#buy" data-element="button-add">
                  Add
                </a>
              </div>
            </div>
          </li>
        `).join('')
      }
        
      </ul>`
  }
}