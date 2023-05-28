<template>
  <div class="award-card">
    <div class="award-badge text-align-center">
      <img
        :src="awardIcon"
        alt="award image"
        class="block center-with-margin"
        width="111"
        height="92"
      />
    </div>
    <p
      class="year font-24 primary-text text-align-center line-height-38 font-bold"
    >
      {{ awardYear }}
    </p>
    <p
      class="award-name primary-text text-align-center line-height-26 font-bold"
    >
      {{ awardName }}
    </p>
    <p
      class="award-location primary-text opacity-60 text-align-center line-height-19 font-medium"
    >
      {{ awardLocation }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["awardIcon", "awardYear", "awardName", "awardLocation"],
};
</script>

<style scoped>
.year {
  margin-top: 16px;
}

.award-name,
.award-location {
  margin-top: 4px;
}

.award-card {
  flex-basis: 8.3125em;
}
</style>
