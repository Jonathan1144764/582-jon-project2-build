<template>
  <button @click="createNewUser">New User</button>
</template>

<script>
export default {
  name: "CreateUsers",
  props: {
    allUsers: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            username: "default",
            bookmarkedEvents: ["event1", "event2"],
          },
        ];
      },
    },
  },
  methods: {
    async createNewUser() {
      let newId = this.allUsers[this.allUsers.length - 1].id + 1;
      let number =
        Number(this.allUsers[this.allUsers.length - 1].username.substring(5)) +
        1;
      let newUsername = "Guest" + number.toString();
      const newUser = {
        id: newId,
        username: newUsername,
        bookmarkedEvents: [],
      };
      try {
        await fetch(
          "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        );
      } catch (error) {
        console.log(error);
      }
      this.$emit("refetchUsers", newId);
    },
  },
};
</script>
