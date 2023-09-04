<template>
  <div v-if="isShown" class="bookmark-window">
    <ExitWindow @closeWindow="closeWindow" />
    <EventItem
      v-for="userEvent in userEvents"
      :userEvent="userEvent"
      :key="userEvent.id"
    />
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
