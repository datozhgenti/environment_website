<template>
  <section class="other-events left-right-padding-20">
    <div class="wrapper">
      <div class="other-events-content max-width-768 center-with-margin">
        <rigthLineTitleComp data-aos="fade-right"
          >Other events</rigthLineTitleComp
        >
        <div class="events flex">
          <eventCard
            v-for="event in eventStore.events"
            :key="event"
            :dateProp="event.date"
            :mounthProp="event.mounth"
            :titleProp="event.title"
            titleWrapperWidthProp="32.5625em"
            id="card"
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
.other-events {
  padding-bottom: 96px;
}

.events {
  margin-top: 48px;
}

#card {
  width: 100%;
  min-height: 191px;
}

.events {
  flex-direction: column;
  row-gap: 24px;
}
</style>
