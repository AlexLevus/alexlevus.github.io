import { eventsData } from "./events.js";
import { months } from "./months.js";
import { Select } from "./select.js";
import { EventsList } from "./eventList.js";

const eventFilters = {
  city: "all",
  date: "all",
};

const eventList = new EventsList(
  eventsData,
  eventFilters,
  ".event-list__content"
);

const cityOptions = [...new Set(eventsData.map(event => event.city))]
const monthOptions = [...new Set(eventsData.map(event => Object.keys(months)[+event.date.slice(3, 5) - 1]))]

const monthSelect = new Select('month', '#month', monthOptions)
const citySelect = new Select('city', '#city', cityOptions)

window.addEventListener("load", () => {
  eventList.render()
  citySelect.render()
  monthSelect.render()
  citySelect.onChange(Select.selectValue("city", eventList));
  monthSelect.onChange(Select.selectValue("date", eventList));
});



