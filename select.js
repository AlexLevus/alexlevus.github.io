import { months } from "./months.js";

export class Select {
  static container = document.querySelector('.event-list__select-list')

  constructor(name, selector, options) {
    this.name = name;
    this.selector = selector;
    this.options = options;
  }

  onChange(f) {
    document.querySelector(this.selector).addEventListener("change", f);
  }

  render() {
    const html = Select.getHtml(this.name, this.options);
    const newSelect = document.createElement('div')
    newSelect.classList.add("select");
    newSelect.innerHTML = html;
    Select.container.appendChild(newSelect);
  }

  static selectValue(type, list) {
    return function (e) {
      const select = e.target;
      const value = select.value;
      list.setFilteredEvents(type, value);
      list.render();
    };
  }

  static getHtml = (name, options) => `
      <label class="select__label" for="${name}">${name[0].toUpperCase() + name.slice(1)}:</label>
      <select class="select__content" name="${name}" id="${name}">
        <option class="select__value" value="all">All</option>
        ${options.map(Select.getOptionHtml).join("")}
      </select>
    `;

  static getOptionHtml = (value) => `
    <option class="select__value" value="${months[value] ? months[value] : value}">${value}</option>
  `;
}