<template>
  <section
    class="features bg-green-ter padding-top-bottom-96 left-right-padding-20"
  >
    <div class="wrapper">
      <div class="features-content center-with-margin">
        <div class="features-cards-wrapper flex space-between wrap">
          <featureCard
            v-for="feature in features"
            :key="feature"
            :imgProp="feature.img"
            :titleProp="feature.title"
            :subtitleProp="feature.subtitle"
          ></featureCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import featureCard from "../cards/featureCard.vue";
</script>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: require("@/assets/project-inner-photos/feature-photos/feature1.png"),
          title: "200+ Plantation in 1 week",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/project-inner-photos/feature-photos/feature2.png"),
          title: "230 People Have donated",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/project-inner-photos/feature-photos/feature3.png"),
          title: "30+ people joined",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/project-inner-photos/feature-photos/feature4.png"),
          title: "$324 Raised for this initiate",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.features-content {
  max-width: 64em;
}

.features-cards-wrapper {
  row-gap: 48px;
}
</style>
