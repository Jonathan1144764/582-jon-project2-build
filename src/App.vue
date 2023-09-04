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

.admin-control-panel {
  text-align: center;

  button {
    padding: 10px 25px;
    margin: 0 0.5rem;
    border-radius: 10px;
    border: none;
    background-color: #4a7c59;
    color: #fff;
  }

  #parks {
    padding: 3px;
    background-color: #96c3f2;
    border: none;
  }

  #events {
    padding: 3px 5px;
    background-color: #96c3f2;
    border: none;
  }
}

.admin-nav {
  padding-bottom: 0.3rem;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid black;

  a {
    color: #4a7c59;
  }
}

.park-form {
  padding: 10px;
  margin: 1rem 0;
  border: 1px solid black;
  text-align: left;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .name-image-inputs-wrapper {
    display: flex;
    justify-content: space-between;
  }
}

.park-radio-inputs {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .input-wrapper {
    width: calc((100% - 20px) / 2);

    input {
      margin-right: 5px;
    }
  }
}

.park-number-inputs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  label {
    display: block;
  }

  .input-wrapper {
    width: calc((100% - 20px) / 2);
  }
}

.event-form {
  padding: 10px;
  margin: 1rem 0;
  border: 1px solid black;
  text-align: center;

  #parks {
    margin-bottom: 1rem;
  }
}

// .event-form input:first-of-type {
//   display: block;
//   margin: auto;
//   margin-bottom: 0.5rem;
// }

.event-dates-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#users-list {
  padding: 3px 5px;
  background-color: #96c3f2;
  border: none;
}

#park-name-input,
#park-image-input {
  padding: 3px 5px;
  outline: none;
  display: block;
}

#event-name-input {
  display: block;
  margin: auto;
  margin-bottom: 0.5rem;
}

#start-date-input {
  // display: inline;
  margin: auto;
}

#end-date-input {
  margin: auto;
  margin-bottom: 1rem;
}

#event-description-input {
  margin: auto;
  display: block;
  outline: none;
  resize: none;
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

  .park-form {
    .name-image-inputs-wrapper {
      justify-content: center;

      .input-wrapper {
        margin: 0 1rem;
      }
    }
  }

  .park-radio-inputs {
    .input-wrapper {
      width: fit-content;
    }
  }

  .park-number-inputs {
    .input-wrapper {
      text-align: center;
    }
  }

  .event-dates-inputs {
    flex-direction: row;
  }

  #start-date-input,
  #end-date-input {
    margin: 0 0.3rem;
  }
}

@media screen and (min-width: 992px) {
  .park-radio-inputs {
    justify-content: center;

    .input-wrapper {
      margin: 0 0.5rem;
    }
  }

  .park-number-inputs {
    flex-direction: column;
    align-items: center;
  }
}
</style>
