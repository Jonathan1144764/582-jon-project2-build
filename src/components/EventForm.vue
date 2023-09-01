<template>
  <form>
    <EventNameInput />
    <ParkSelect />
    <EventDatesInputs />
    <EventDescriptionInput />
  </form>
</template>

<script>
import EventNameInput from "./EventNameInput.vue";
import EventDatesInputs from "./EventDatesInputs.vue";
import EventDescriptionInput from "./EventDescriptionInput.vue";
import ParkSelect from "./ParkSelect.vue";

export default {
  name: "EventForm",
  components: {
    EventNameInput,
    EventDatesInputs,
    EventDescriptionInput,
    ParkSelect,
  },
};
</script>
