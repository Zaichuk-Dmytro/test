'use strict';
import PhonesCatalog from './components/phone-catalog.js';
import PhonesService from './services/phone-services.js';




export default class PhonePage {
  constructor({element}) {
    
    this._element = element;
    this._render(); 


    this._catalog = new PhonesCatalog ({
      element: this._element.querySelector('[data-phone-catalog]'),
        phones: PhonesService.getAll(),
    })

  }

  _render() {
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
        <div data-phone-catalog>

        </div>
        
      </div>
    </div>`
  }
}