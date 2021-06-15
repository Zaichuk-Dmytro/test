'use strict';
import PhonesCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js'
import PhonesService from './services/phone-services.js';

export default class PhonePage {
  constructor({element}) {
    
    this._element = element;
    this._render(); 


    this._catalog = new PhonesCatalog ({
      element: this._element.querySelector('[data-component="data-phone-catalog"]'),
      phones: PhonesService.getAll(),
      onPhoneSelected: (id) => {
        let phoneDetails = PhonesService.getById(id);
        this._catalog.hide();
        this._viewer.show(phoneDetails);
      } 
    })

    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="data-phone-viewer"]'),
      buttonBack: () => {
        this._viewer.hide();
        this._catalog.show();
      }
    })


  }

  _render() {
     console.log()
    this._element.innerHTML = `
      <div class="row">
      <div class="col-md-2">
        <section>
          <p>
            Search:
            <input type="text" />
          </p>

          <p>
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </p>
        </section>

        <section>
          <p>Shopping Cart</p>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>
        </section>
      </div>

      <div class="col-md-10">
      
        <div data-component="data-phone-viewer"></div>
        <div data-component="data-phone-catalog"></div>
        
      </div>
    </div>`
  }
}