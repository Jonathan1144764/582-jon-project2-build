<template>
  <MainHeader />
  <router-view />
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #d7be82;
  font-family: "Poppins", sans-serif;
}

header {
  background-color: #4a7c59;
  nav {
    margin-bottom: 0.5rem;
    a {
      color: #fff;

      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

section {
  padding: 20px 0;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

.container {
  width: 90%;
  max-width: 1400px;
  margin: auto;
}

.header-flex {
  padding: 1rem 0;
  text-align: center;
}

.user-management {
  button {
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    background-color: #d7be82;
    cursor: pointer;
  }
  label {
    margin: 0 1rem;
  }
}

.home-landing {
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  .container {
    max-width: 700px;
  }
}

.home-landing p:first-of-type {
  margin-bottom: 0.5rem;
}

#users-list {
  padding: 3px 5px;
  background-color: #96c3f2;
  border: none;
}

@media screen and (min-width: 576px) {
  section {
    padding: 40px 0;
  }
}

@media screen and (min-width: 768px) {
  header {
    nav {
      margin: 0;
    }
  }
  .header-flex {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
