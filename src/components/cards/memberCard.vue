<template>
  <div class="member-card" data-aos="fade-right">
    <img
      :src="memberImg"
      alt="member"
      class="w100 block object-fit-cover"
      height="320"
    />
    <div class="info text-align-center">
      <p class="name font-medium font-20 line-height-32 primary-text">
        {{ memberName }}
      </p>
      <p
        class="position font-12 font-medium primary-text opacity-60 line-height-19"
      >
        {{ memberPosition }}
      </p>
      <socialIconsComp class="center-with-margin"></socialIconsComp>
    </div>
  </div>
</template>

<script setup>
import socialIconsComp from "../social-icons-comps/socialIconsComp.vue";
</script>

<script>
export default {
  props: ["memberImg", "memberName", "memberPosition"],
};
</script>

<style scoped>
.member-card {
  max-width: 18.5em;
}

.info {
  margin-top: 16px;
}

.position {
  margin: 8px 0 16px;
}
</style>
