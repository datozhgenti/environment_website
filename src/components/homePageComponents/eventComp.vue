<template>
  <section
    class="event-section padding-top-bottom-96 left-right-padding-20"
    id="events"
  >
    <div class="wrapper">
      <div class="event-content">
        <rigthLineTitleComp data-aos="fade-left">Our Events</rigthLineTitleComp>
        <div class="event-cards-wrapper flex space-between wrap">
          <eventCard
            v-for="event in eventStore.events"
            :key="event"
            :dateProp="event.date"
            :mounthProp="event.mounth"
            :titleProp="event.title"
            data-aos="flip-down"
          ></eventCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import rigthLineTitleComp from "../titleComps/rigthLineTitleComp.vue";
import eventCard from "../cards/eventCard.vue";
</script>

<script>
import { mapStores } from "pinia";
import { useEventStore } from "@/stores/eventStore";
export default {
  computed: {
    ...mapStores(useEventStore),
  },
};
</script>

<style scoped>
.event-cards-wrapper {
  margin-top: 48px;
}

.event-cards-wrapper {
  gap: 40px 15px;
}

@media all and (max-width: 81.875em) {
  .event-cards-wrapper {
    justify-content: center;
  }
}
</style>
