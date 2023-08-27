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
    createNewUser() {
      console.log(this.allUsers[this.allUsers.length - 1]);
      let newId = Number(this.allUsers[this.allUsers.length - 1].id) + 1;
      let number =
        Number(this.allUsers[this.allUsers.length - 1].username.substring(5)) +
        1;
      let newUsername = "Guest" + number.toString();
      console.log(newId, newUsername);
    },
  },
};
</script>
