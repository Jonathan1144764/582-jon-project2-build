<template>
    <form>
        <EventNameInput />
        <EventDatesInputs />
    </form>
</template>

<script>
import EventNameInput from "./EventNameInput.vue";
import EventDatesInputs from "./EventDatesInputs.vue";

export default {
    name: "EventForm",
    components: {
        EventNameInput,
        EventDatesInputs
    }
}
</script>