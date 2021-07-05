'use strict';
import PhonesCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js'
import PhoneCart from './components/shoping-cart.js';
import PhonesService from './services/phone-services.js';
import Filter from './components/filter.js';
export default class PhonePage {
  constructor({element}) {
    
    this._element = element;
    this._render(); 

    this._initSearch();
    this._initCatalog();
    this._initViewer();
    this._initCart();
    
  }

  _initCatalog() {
    this._catalog = new PhonesCatalog ({
      element: this._element.querySelector('[data-component="data-phone-catalog"]'),
    })
    
    this._showPhones()

    this._catalog.subscribe('phone-selected', (id) => {
      let phoneDetails = PhonesService.getById(id);
      
        this._catalog.hide();
        this._viewer.show(phoneDetails);
    })

    this._catalog.subscribe('add', (phoneId) => {
      let phoneDetails = PhonesService.getAll()
      let phoneName = phoneDetails.find(el =>  el.id == phoneId)
      this._cart.showNewListCart(phoneName.name);
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

    this._viewer.subscribe ('add', (phoneName) => {
     
      this._cart.showNewListCart(phoneName);
    })
  }

  _initCart() {
    this._cart = new PhoneCart ({
      element: this._element.querySelector('[data-component="data-phone-cart"]')
    })
  }

  _initSearch() {
    this._search = new Filter ({
      element: this._element.querySelector('[data-component="data-search"]')
    })

    this._search.subscribe('query-change', (eventData => {
      this._showPhones();
    }))

    this._search.subscribe('order-change', (eventData => {
      this._showPhones();
    }))
  }
    
  _showPhones() {
    this._currentFiltered = this._search.getCurrent();
    let phones = PhonesService.getAll(this._currentFiltered)
    console.log('Searting phones for criteria:', this._currentFiltered)
    this._catalog._show(phones)
    
  }

  _render() {
    
    this._element.innerHTML = `
      <aside class="aside">
        <section>
          <div data-component="data-search"></div>
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