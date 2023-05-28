<template>
  <section class="awards-section padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <h2 class="font-48 text-align-center primary-text">
        Awards & Recognitions
      </h2>
      <div class="awards-row flex space-between wrap">
        <awardCard
          v-for="award in awards"
          :key="award"
          :awardIcon="award.awardIcon"
          :awardYear="award.awardYear"
          :awardName="award.awardName"
          :awardLocation="award.awardLocation"
        ></awardCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      awards: [
        {
          awardIcon: require("@/assets/award-icons/Award1.png"),
          awardYear: "2021",
          awardName: "Best NGO Award",
          awardLocation: "Berlin, Germany",
        },
        {
          awardIcon: require("@/assets/award-icons/Award2.png"),
          awardYear: "2018",
          awardName: "Global Award",
          awardLocation: "New York, USA",
        },
        {
          awardIcon: require("@/assets/award-icons/Award3.png"),
          awardYear: "2014",
          awardName: "Foresto Award",
          awardLocation: "New Delhi, India",
        },
        {
          awardIcon: require("@/assets/award-icons/Award4.png"),
          awardYear: "2010",
          awardName: "Earth Saver Award",
          awardLocation: "Vienna, Austria",
        },
      ],
    };
  },
};
</script>

<script setup>
import awardCard from "../cards/awardCard.vue";
</script>

<style scoped>
.awards-row {
  max-width: 68.6875em;
  margin: 0 auto;
  margin-top: 48px;
  row-gap: 40px;
}
</style>
