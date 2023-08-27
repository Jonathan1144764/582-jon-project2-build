<template>
  <select name="users" id="users-list">
    <option v-for="user in allUsers" :value="user.username" :key="user.id">
      {{ user.username }}
    </option>
  </select>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      allUsers: [],
    };
  },
  created() {
    fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        for (let user of json) {
          this.allUsers.push(user);
        }
      });
  },
};
</script>

<style scoped lang="scss"></style>
