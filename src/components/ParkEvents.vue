<template>
  <div class="park-event">
    <h3>{{ event.eventName }}</h3>
    <p class="event-location">{{ event.eventLocation }}</p>
    <p>
      <span class="event-time">{{ event.eventStartDate }}</span>
      <span class="event-time">{{ event.eventStartDate }}</span>
    </p>
    <p class="event-description">{{ event.eventDescription }}</p>
    <AddBookmark @bookmarkEvent="bookmarkEvent" />
  </div>
</template>

<script>
import { useUserStore } from "../store/userStore";
import AddBookmark from "./AddBookmark.vue";

export default {
  name: "ParkEvents",
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
  props: {
    event: {
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
  components: {
    AddBookmark,
  },
  methods: {
    bookmarkEvent() {
      console.log(this.userStore.loggedUser);
    },
  },
};
</script>
