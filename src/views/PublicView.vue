<template>
  <section class="public-view">
    <div class="container">
      <h2>See what's up at your local parks</h2>
      <ViewBookmarksButton @bookmarksView="bookmarksView" />
      <BookmarksList
        :userEvents="userEvents"
        :isShown="isShown"
        @closeWindow="closeWindow"
      />
      <ParkList :allParks="allParks" :allEvents="allEvents" />
    </div>
  </section>
</template>

<script>
import ParkList from "@/components/ParkList.vue";
import ViewBookmarksButton from "@/components/ViewBookmarksButton.vue";
import BookmarksList from "@/components/BookmarksList.vue";

export default {
  name: "PublicView",
  data() {
    return {
      isShown: false,
      allEvents: [],
      allParks: [],
      userEvents: [],
    };
  },
  components: {
    ParkList,
    ViewBookmarksButton,
    BookmarksList,
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
      this.isShown = true;
      this.userEvents = [];
      fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public/user"
      )
        .then((response) => response.json())
        .then((json) => {
          for (let user of json) {
            if (user.username == loggedUser) {
              this.userEvents = user.bookmarkedEvents;
            }
          }
        });
    },
    closeWindow() {
      this.isShown = false;
    },
  },
  created() {
    this.fetchParks();
    this.fetchEvents();
  },
};
</script>
