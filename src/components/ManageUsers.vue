<template>
  <div class="user-management">
    <CreateUsers @refetchUsers="fetchUsers" :allUsers="allUsers" />
    <UserList @loggedUser="loggedUser" :allUsers="allUsers" />
  </div>
</template>

<script>
import { useUserStore } from "../store/userStore";
import UserList from "./UserList.vue";
import CreateUsers from "./CreateUsers.vue";

export default {
  name: "ManageUsers",
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
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
      fetch("//jonathan64.web582.com/web-framework/project-2")
        .then((response) => response.json())
        .then((json) => {
          for (let user of json) {
            this.allUsers.push(user);
          }
        });
    },
    loggedUser(user) {
      this.userStore.loggedUser = user;
      this.userStore.authenticate(user);
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
