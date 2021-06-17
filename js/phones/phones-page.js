'use strict';
import PhonesCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js'
import PhoneCart from './components/shoping-cart.js';
import PhonesService from './services/phone-services.js';
export default class PhonePage {
  constructor({element}) {
    
    this._element = element;
    this._render(); 

    this._initCatalog();
    this._initViewer();
    this._initCart();
  }

  _initCatalog() {
    console.log('this',this)
    this._catalog = new PhonesCatalog ({
      element: this._element.querySelector('[data-component="data-phone-catalog"]'),
      phones: PhonesService.getAll(),
      
    })

    this._catalog.subscribe('phone-selected', (id) => {
      let phoneDetails = PhonesService.getById(id);
      
        this._catalog.hide();
        this._viewer.show(phoneDetails);

        
    })
    this._catalog.subscribe('add', (phoneId) => {
      let phoneDetails = PhonesService.getAll()
      let phoneName = phoneDetails.find(el =>  el.id == phoneId)
      
       this._cart.showNewListCart(phoneName);
      
      ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   })
  }
    
  _initViewer() {
    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="data-phone-viewer"]'),
    })

    this._viewer.subscribe('back', () => {
      this._catalog.show();
      this._viewer.hide();
    })

    // this.viever.subscribe('add', (phoneId) => {
    //   let phoneDetails = PhonesService.getAll()
    //   let phoneName = phoneDetails.find(el =>  el.id == phoneId)
      
    // this._cart.showNewListCart(phoneName)
    // })
  }

  _initCart() {
    this._cart = new PhoneCart ({
      element: this._element.querySelector('[data-component="data-phone-cart"]')
    })

    
  }
    
  _render() {
    console.log(this)
    this._element.innerHTML = `
      <aside class="aside">
        <section>
          <p>
            Search:
            <input type="text" />
          </p>

          <p>
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newedst</option>
            </select>
          </p>
        </section>

        <section>
          <div class="shopping-cart" data-component="data-phone-cart"></div>
        </section>
      </aside>

      <div class="mainDivCatalog">
        <div class="" data-component="data-phone-viewer"></div>
        <div class="phone_catalog" data-component="data-phone-catalog"></div>
      </div>`
  }
}