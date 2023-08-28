<template>
  <section class="admin-control-panel">
    <div class="container">
      <AdminNav />
      <!-- <h2>This is the admin page</h2> -->
      <RouterView />
    </div>
  </section>
</template>

<script>
import AdminNav from "@/components/AdminNav.vue";

export default {
  name: "AdminView",
  components: {
    AdminNav,
  },
};
</script>
