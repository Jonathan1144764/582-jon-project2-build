<template>
  <EventSelect :allEvents="allEvents" @populateForm="populateForm" />
  <EventForm
    :selectedEvent="selectedEvent"
    :allParks="allParks"
    @refetchEvents="fetchEvents"
  />
</template>

<script>
import EventSelect from "../components/EventSelect.vue";
import EventForm from "../components/EventForm.vue";

export default {
  name: "UpdateEventFormView",
  data() {
    return {
      allEvents: [],
      selectedEvent: {},
      allParks: [],
    };
  },
  components: {
    EventSelect,
    EventForm,
  },
  methods: {
    fetchEvents() {
      this.allEvents = [];
      fetch("https://jonathan64.web582.com/web-framework/project-2/admin/updateevent")
        .then((response) => response.json())
        .then((json) => {
          for (let event of json) {
            this.allEvents.push(event);
          }
        });
    },
    fetchParks() {
      this.allParks = [];
      fetch("https://jonathan64.web582.com/web-framework/project-2/admin/updateevent/park")
        .then((response) => response.json())
        .then((json) => {
          for (let park of json) {
            this.allParks.push(park);
          }
        });
    },
    populateForm(selectedEvent) {
      for (let i = 0; i < this.allEvents.length; i++) {
        if (selectedEvent.id == this.allEvents[i].id) {
          document.querySelector("#event-name-input").value =
            selectedEvent.eventName;
          document.querySelector("#parks").value = selectedEvent.eventLocation;
          document.querySelector("#start-date-input").value =
            selectedEvent.eventStartDate;
          document.querySelector("#end-date-input").value =
            selectedEvent.eventEndDate;
          document.querySelector("#event-description-input").value =
            selectedEvent.eventDescription;
        }
      }
      this.selectedEvent = selectedEvent;
    },
  },
  created() {
    this.fetchEvents();
    this.fetchParks();
  },
};
</script>
