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
  //   getters: {
  //     authenticated: (state) =>
  //       state.loggedUser == "admin"
  //         ? (state.isAuthenticated = true)
  //         : (state.isAuthenticated = false),
  //   },
});
