<template>
  <div class="stat-card flex align-center">
    <div
      class="rectangle border-radius-4"
      :style="{
        backgroundColor: bgProp,
      }"
    ></div>
    <p class="white-text font-medium line-height-26">{{ statProp }}</p>
  </div>
</template>

<script>
export default {
  props: ["bgProp", "statProp"],
};
</script>

<style scoped>
.rectangle {
  width: 1em;
  height: 1em;
}

.stat-card {
  column-gap: 8px;
}
</style>
