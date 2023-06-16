<template>
  <section class="what-we-do-section bg-green-ter">
    <div class="wrapper">
      <div class="what-we-do-section-content">
        <h2 class="font-48 primary-text">What we do for the environment</h2>
        <div class="features flex wrap space-between">
          <whatWeDoCard
            v-for="feature in features"
            :key="feature"
            :imgProp="feature.img"
            :titleProp="feature.title"
            :subtitleProp="feature.subtitle"
            style="max-width: 24em"
          ></whatWeDoCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import whatWeDoCard from "../cards/whatWeDoCard.vue";
</script>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: require("@/assets/whatWeDoCompImgs/Icon1.png"),
          title: "Build healthy cities",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon2.png"),
          title: "Protect land and water",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon3.png"),
          title: "Tree plantation",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon5.png"),
          title: "Water sustainability",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon4.png"),
          title: "Animal safety",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon6.png"),
          title: "Biodiversity",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.what-we-do-section {
  padding: 96px 20px 104px;
}

.features {
  margin-top: 64px;
  row-gap: 48px;
}
</style>

<style>
.features p {
  font-size: 0.875em;
}
</style>
