<template>
  <div class="journey-stats-card">
    <p class="font-24 font-medium line-height-38">{{ statsNumber }}</p>
    <p class="font-12 font-medium opacity-60 line-height-19">
      {{ statsName }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["statsNumber", "statsName"],
};
</script>

<style scoped>
@media all and (max-width: 22.5em) {
  .journey-stats-card {
    width: 100%;
  }
}
</style>
