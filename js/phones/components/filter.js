import Comnponent from "./component.js"
import debounce from "../../units.js";

export default class Filter extends Comnponent{
  constructor({ element }) {
    super({ element })
    
    this._render();
    this._queryField = this._element.querySelector('[data-element="query-field"]')
    this._orderField = this._element.querySelector('[data-element="order-field"]')
    
    let debouncedOnImput = debounce(() => {
      this.emit('query-change')
    },500);

    this.on('input', '[data-element="query-field"]', debouncedOnImput)


    this.on('change', '[data-element="order-field"]', () => {
      this.emit('order-change')
    })

  }

  getCurrent() {
    return {
      query: this._queryField.value,
      order: this._orderField.value
    }
  }

  _render() {
    
    this._element.innerHTML = `
    <p>
      Search:
      <input data-element="query-field">
    </p>

    <p>
      Sort by:
      <select data-element="order-field">
        <option value="name">Alphabetical</option>
        <option value="age">Newedst</option>
      </select>
    </p>`
  }
}