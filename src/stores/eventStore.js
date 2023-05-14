import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: () => ({
    events: [
      {
        date: 23,
        mounth: "SEP",
        title: "Say no to plastic usage and save the planet",
      },
      {
        date: 25,
        mounth: "SEP",
        title: "Weekly cleaning program",
      },
    ],
  }),
});
