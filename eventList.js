export class EventsList {
  constructor(events, filters, selector) {
    this.element = document.querySelector(selector);
    this.filters = filters;
    this.events = events;
  }

  render() {
    const data = this.filteredEvents ?? this.events;
    const html = data.length !== 0 ? data.map(EventsList.getHtml).join("") : EventsList.getNotFoundHtml();
    this.element.innerHTML = html;
  }

  setFilteredEvents(type, value) {
    this.filters[type] = value;
    this.filteredEvents = this.events;

    const isExistFilter = Object.values(this.filters).some(event => event !== "all");

    if (isExistFilter) {
      for (const key in this.filters) {
        if (this.filters[key] !== "all") {
          this.filteredEvents = this.filteredEvents.filter(event =>
            event[key].includes(this.filters[key])
          );
        }
      }
    }
  }

  static getHtml = ({ date, image, name }) => `
    <a href="#" class="event" style="background-image:url(${image});">
      <div class="event__info">
        <span class="event__date">${date.slice(0, 2)}</span>
      </div>
      <h2 class="event__name">${name}</h2>
    </a>
    `;

  static getNotFoundHtml = () => `
    <p class="not-found">Events not found<p>
  `
}