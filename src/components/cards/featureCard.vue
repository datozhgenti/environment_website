<template>
  <div class="feature-card flex space-between">
    <div class="feature-img">
      <img :src="imgProp" alt="feature" class="block" />
    </div>
    <div class="feature-text">
      <h6 class="primary-text font-24 line-height-38">
        {{ titleProp }}
      </h6>
      <p class="secondary-text line-height-26">
        {{ subtitleProp }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgProp", "titleProp", "subtitleProp"],
};
</script>

<style scoped>
.feature-card {
  flex-basis: 30.5em;
}

h6 {
  margin-bottom: 8px;
}

.feature-text {
  margin-left: 20px;
}
</style>
