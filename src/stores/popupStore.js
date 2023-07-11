import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", {
  state: () => ({
    popupActive: false,
  }),
  actions: {
    popupActivate() {
      this.popupActive = true;
    },
    popupDeactivate() {
      this.popupActive = false;
    },
  },
});
