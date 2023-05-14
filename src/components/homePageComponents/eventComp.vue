<template>
  <section class="event-section padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div class="event-content">
        <rigthLineTitleComp>Our Events</rigthLineTitleComp>
        <div class="event-cards-wrapper flex space-between wrap">
          <eventCard
            v-for="event in events"
            :key="event"
            :dateProp="event.date"
            :mounthProp="event.mounth"
            :titleProp="event.title"
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
export default {
  data() {
    return {
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
    };
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
