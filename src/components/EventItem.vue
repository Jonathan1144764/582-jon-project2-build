<template>
  <div class="bookmarked-events">
    <h3>{{ userEvent.eventName }}</h3>
    <p class="event-location">{{ userEvent.eventLocation }}</p>
    <p>
      <span class="event-time">{{ userEvent.eventStartDate }}</span>
      <span class="event-time">{{ userEvent.eventStartDate }}</span>
    </p>
    <p class="event-description">{{ userEvent.eventDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "EventItem",
  props: {
    userEvent: {
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
};
</script>
