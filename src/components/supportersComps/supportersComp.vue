<template>
  <p class="font-medium letter-spacing-2" v-bind="$attrs">our Supporters</p>
  <div class="logos-wrapper flex space-between wrap">
    <div v-for="logo in logos" :key="logo">
      <img :src="logo" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        require("@/assets/supporters_logos/Logo1.png"),
        require("@/assets/supporters_logos/Logo2.png"),
        require("@/assets/supporters_logos/Logo3.png"),
        require("@/assets/supporters_logos/Logo4.png"),
        require("@/assets/supporters_logos/Logo5.png"),
        require("@/assets/supporters_logos/Logo6.png"),
      ],
    };
  },
  inheritAttrs: false,
};
</script>

<style scoped>
@media all and (max-width: 58.75em) {
  .logos-wrapper div {
    width: 100%;
  }
}
</style>
