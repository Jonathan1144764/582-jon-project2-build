<template>
  <div v-if="isShown" class="bookmark-window">
    <h3>Your events</h3>
    <ExitWindow @closeWindow="closeWindow" />
    <div class="bookmarks-grid">
      <EventItem
        v-for="userEvent in userEvents"
        :userEvent="userEvent"
        :key="userEvent.id"
      />
    </div>
  </div>
</template>

<script>
import EventItem from "./EventItem.vue";
import ExitWindow from "./ExitWindow.vue";

export default {
  name: "BookmarksList",
  props: {
    userEvents: {
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
    isShown: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {
    EventItem,
    ExitWindow,
  },
  methods: {
    closeWindow() {
      this.$emit("closeWindow", true);
    },
  },
};
</script>
