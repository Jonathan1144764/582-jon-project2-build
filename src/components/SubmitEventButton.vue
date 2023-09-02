<template>
  <button
    v-if="this.$route.href.substring(6) == '/newevent'"
    @click="submitNewEvent"
  >
    Submit
  </button>
  <button v-if="this.$route.href.substring(6) == '/updateevent'">Update</button>
  <button v-if="this.$route.href.substring(6) == '/updateevent'">Delete</button>
</template>

<script>
export default {
  name: "SubmitEventButton",
  emits: ["refetchEvents"],
  props: {
    allEvents: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            eventName: "default",
            eventLocation: "somewhere",
            eventStartDate: 0,
            eventEndDate: 0,
            eventDescription: 0,
          },
        ];
      },
    },
    selectedEvent: {
      type: Object,
      default() {
        return {
          id: 0,
          eventName: "default",
          eventLocation: "somewhere",
          eventStartDate: 0,
          eventEndDate: 0,
          eventDescription: 0,
        };
      },
    },
  },
  methods: {
    async submitNewEvent() {
      let newId = this.allEvents[this.allEvents.length - 1].id + 1;
      let name = document.querySelector("#event-name-input").value;
      let location = document.querySelector("#parks").value;
      let startDate = document.querySelector("#start-date-input").value;
      let endDate = document.querySelector("#end-date-input").value;
      let description = document.querySelector(
        "#event-description-input"
      ).value;

      let newEvent = {
        id: newId,
        eventName: name,
        eventLocation: location,
        eventStartDate: startDate,
        eventEndDate: endDate,
        eventDescription: description,
      };
      try {
        await fetch(
          "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/newevent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.$emit("refetchEvents", newId);
      this.clear();
    },
    async updateEvent() {
      let name = document.querySelector("#event-name-input").value;
      let location = document.querySelector("#parks").value;
      let startDate = document.querySelector("#start-date-input").value;
      let endDate = document.querySelector("#end-date-input").value;
      let description = document.querySelector(
        "#event-description-input"
      ).value;

      let updatedEvent = {
        id: this.selectedEvent.id,
        eventName: name,
        eventLocation: location,
        eventStartDate: startDate,
        eventEndDate: endDate,
        eventDescription: description,
      };
      try {
        fetch(
          "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/updateevent",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            bode: JSON.stringify(updatedEvent),
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.$emit("refetchEvents", updatedEvent.id);
      this.clear();
      this.clearEventSelect();
    },
    clear() {
      document.querySelector("#event-name-input").value = "";
      document.querySelector("#parks").value = "";
      document.querySelector("#start-date-input").value = "";
      document.querySelector("#end-date-input").value = "";
      document.querySelector("#event-description-input").value = "";
    },
    clearEventSelect() {
      document.querySelector("#events").value = "";
    },
  },
};
</script>
