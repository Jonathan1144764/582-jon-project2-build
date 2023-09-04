<template>
  <label for="users">Login: </label>
  <select name="users" id="users-list" @change="loggedUser">
    <option value=""></option>
    <option v-for="user in this.allUsers" :value="user.username" :key="user.id">
      {{ user.username }}
    </option>
  </select>
</template>

<script>
export default {
  name: "UserList",
  emits: ["loggedUser"],
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
    loggedUser() {
      let user = event.target.value;
      this.$emit("loggedUser", user);
    },
  },
};
</script>
