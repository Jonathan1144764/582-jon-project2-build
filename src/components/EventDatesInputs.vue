<template>
  <div class="event-dates-inputs">
    <EventStartDateInput />
    <EventEndDateInput />
  </div>
</template>

<script>
import EventStartDateInput from "./EventStartDateInput.vue";
import EventEndDateInput from "./EventEndDateInput.vue";

export default {
  name: "EventDatesInputs",
  components: {
    EventStartDateInput,
    EventEndDateInput,
  },
};
</script>
