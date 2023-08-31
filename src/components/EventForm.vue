<template>
  <form>
    <EventNameInput />
    <EventDatesInputs />
    <EventDescriptionInput />
  </form>
</template>

<script>
import EventNameInput from "./EventNameInput.vue";
import EventDatesInputs from "./EventDatesInputs.vue";
import EventDescriptionInput from "./EventDescriptionInput.vue";

export default {
  name: "EventForm",
  components: {
    EventNameInput,
    EventDatesInputs,
    EventDescriptionInput,
  },
};
</script>
