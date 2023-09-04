<template>
  <nav class="admin-nav">
    <router-link to="/admin/newpark">Add park | </router-link>
    <router-link to="/admin/updatepark">Update/Delete park | </router-link>
    <router-link to="/admin/newevent">Add event | </router-link>
    <router-link to="/admin/updateevent">Update/Delete event | </router-link>
  </nav>
</template>

<script>
export default {
  name: "AdminNav",
};
</script>
