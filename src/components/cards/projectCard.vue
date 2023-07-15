<template>
  <div
    class="project-card background-size-cover background-no-repeat border-radius-12"
    :style="{
      backgroundImage: `url(${imgUrl})`,
    }"
    id="margin-0"
    data-aos="fade-left"
    :data-aos-delay="animDelay"
  >
    <div class="card-content w100 h100 border-radius-12" v-bind="$attrs">
      <h3 class="font-28 white-text line-height-42">
        {{ titleProp }}
      </h3>
      <p class="line-height-26 white-text">
        {{ subtitleProp }}
      </p>
      <buttonComp
        class="secondary-btn font-medium block line-height-19"
        @click="$router.push('/project-inner')"
        >See more</buttonComp
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "titleProp", "subtitleProp", "animDelay"],
  inheritAttrs: false,
};
</script>

<script setup>
import buttonComp from "../buttonComps/buttonComp.vue";
</script>

<style scoped>
.project-card {
  width: 25.6875em;
  height: 26.3125em;
}

.card-content {
  background-color: rgba(11, 7, 6, 0.5);
  padding: 80px 48px 48px;
}

.card-content p {
  margin: 16px 0 64px;
}

.secondary-btn {
  width: 132px;
}

.project-card:not(.project-card:last-child) {
  margin-right: 15px;
}

@media all and (max-width: 81.375em) {
  #margin-0 {
    margin: 0;
  }
}

@media all and (max-width: 28.4375em) {
  .project-card {
    width: 100%;
  }
}

@media all and (max-width: 23.4375em) {
  .project-card {
    height: auto;
  }
}
</style>
