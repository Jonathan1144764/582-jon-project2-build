<template>
  <h2>See what's up at your local parks</h2>
  <ViewBookmarksButton @bookmarksView="bookmarksView" />
  <ParkList :allParks="allParks" :allEvents="allEvents" />
</template>

<script>
import ParkList from "@/components/ParkList.vue";
import ViewBookmarksButton from "@/components/ViewBookmarksButton.vue";

export default {
  name: "PublicView",
  data() {
    return {
      allEvents: [],
      allParks: [],
      userEvents: [],
    };
  },
  components: {
    ParkList,
    ViewBookmarksButton,
  },
  methods: {
    fetchParks() {
      this.allParks = [];
      fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public"
      )
        .then((response) => response.json())
        .then((json) => {
          for (let park of json) {
            this.allParks.push(park);
          }
        });
      console.log(this.allParks);
    },
    fetchEvents() {
      this.allEvents = [];
      fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public/event"
      )
        .then((response) => response.json())
        .then((json) => {
          for (let event of json) {
            this.allEvents.push(event);
          }
        });
    },
    bookmarksView(loggedUser) {
      this.userEvents = [];
      fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public/user"
      )
        .then((response) => response.json())
        .then((json) => {
          for (let user of json) {
            // this.userEvents.push(user);
            if (user.username == loggedUser) {
              this.userEvents.push(user.bookmarkedEvents);
            }
          }
        });
      console.log(this.userEvents);
    },
  },
  created() {
    this.fetchParks();
    this.fetchEvents();
  },
};
</script>
