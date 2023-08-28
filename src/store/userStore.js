import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    loggedUser: "",
    isAuthenticated: false,
  }),
  actions: {
    authenticate(loggedUser) {
      if (loggedUser == "admin") {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    },
  },
});
