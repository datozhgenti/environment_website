<template>
  <section
    class="stats-section bg-black padding-top-bottom-96 left-right-padding-20"
  >
    <div class="wrapper">
      <div class="stats-content flex space-between wrap row-gap-40">
        <div class="left margin-right-40">
          <h2 class="font-48 white-text">
            How we spend your donations and where it goes
          </h2>
          <p class="white-text opacity-60 line-height-26">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div class="stats-row flex wrap">
            <statsCard
              v-for="(stat, index) in stats"
              :key="stat"
              :bgProp="stat.bg"
              :statProp="stat.stat"
              :style="{ paddingLeft: index === 4 ? '2px' : '' }"
            ></statsCard>
          </div>
        </div>
        <div class="right">
          <div
            class="chart border-radius-full h100 flex align-center justify-center"
          >
            <div
              class="bg-black border-radius-full flex align-center justify-center"
            >
              <p class="white-text font-bold">{Environment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { bg: "#BEF3C0", stat: "40% planting trees" },
        { bg: "#AC94F1", stat: "35% cleanliness program" },
        { bg: "#FFF0CA", stat: "10% helping people" },
        { bg: "#F9CF64", stat: "10% animal safety" },
        { bg: "#F38FBF", stat: "5% feeding the poor" },
      ],
    };
  },
};
</script>

<script setup>
import statsCard from "../cards/statsCard.vue";
</script>

<style scoped>
.left {
  width: 611px;
  margin-top: 46px;
}

.right {
  width: 375px;
  height: 375px;
}

.opacity-60 {
  margin: 16px 0 32px;
}

.stats-row {
  gap: 16px 3.9%;
}

.chart {
  background-color: #ac94f1;
  background-image: conic-gradient(
    #bef3c0 0%,
    #bef3c0 40%,
    #ac94f1 40%,
    #ac94f1 75%,
    #fff0ca 75%,
    #fff0ca 85%,
    #f9cf64 85%,
    #f9cf64 95%,
    #f38fbf 95%
  );
}

.chart div {
  width: 53.3%;
  height: 53.3%;
}

.chart p {
  line-height: 23px;
  font-size: 16px;
}

@media all and (max-width: 40.375em) {
  .stats-row div {
    width: 100%;
  }
}

@media all and (max-width: 26.875em) {
  .chart {
    width: 87.2vw;
    height: 87.2vw;
  }
}
</style>
