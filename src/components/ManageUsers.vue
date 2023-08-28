<template>
  <div class="user-management">
    <CreateUsers @refetchUsers="fetchUsers" :allUsers="allUsers" />
    <UserList :allUsers="allUsers" />
  </div>
</template>

<script>
import UserList from "./UserList.vue";
import CreateUsers from "./CreateUsers.vue";

export default {
  name: "ManageUsers",
  data() {
    return {
      allUsers: [],
    };
  },
  components: {
    UserList,
    CreateUsers,
  },
  methods: {
    fetchUsers() {
      this.allUsers = [];
      fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/")
        .then((response) => response.json())
        .then((json) => {
          for (let user of json) {
            this.allUsers.push(user);
          }
        });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
