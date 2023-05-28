<template>
  <section class="journey-section padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div
        class="journey-content bg-black border-radius-12 white-text flex space-between wrap row-gap-40"
      >
        <div class="left">
          <h6 class="font-16 letter-spacing-2">OUR JOURNEY</h6>
          <h2 class="font-48">How we raised 34M</h2>
          <p class="opacity-60 line-height-26">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh.
          </p>
          <div class="stats-row flex space-between wrap row-gap-40">
            <jorneyStatsCardVue
              v-for="stat in stats"
              :key="stat"
              :statsNumber="stat.number"
              :statsName="stat.name"
            ></jorneyStatsCardVue>
          </div>
        </div>
        <div class="right">
          <img
            src="@/assets/journey-images/journey.png"
            alt="journey image"
            class="block"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import jorneyStatsCardVue from "../cards/jorneyStatsCard.vue";
</script>

<script>
export default {
  data() {
    return {
      stats: [
        { number: "34M+", name: "Donation Received" },
        { number: "400+", name: "Volunters" },
        { number: "40K+", name: "Trees planted" },
      ],
    };
  },
};
</script>

<style scoped>
.journey-content {
  padding: 64px 0 64px 96px;
}

.left {
  flex-basis: 30.5em;
  padding-top: 64px;
}

.stats-row {
  max-width: 18.375em;
}

h6,
h2 {
  margin-bottom: 16px;
}

p {
  margin-bottom: 32px;
}

@media all and (max-width: 51.25em) {
  img {
    width: 100%;
  }

  .journey-content {
    padding: 20px;
  }
}
</style>
