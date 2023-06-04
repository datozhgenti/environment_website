<template>
  <div class="social-icons-wrapper flex space-between">
    <a
      v-for="icon in icons"
      :href="icon.to"
      :key="icon"
      class="block"
      target="_"
    >
      <img :src="icon.img" :alt="icon.iconName" class="block h100" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          to: "https://www.facebook.com/",
          img: require("@/assets/social-network-icons/facebook.png"),
          iconName: "facebook",
        },
        {
          to: "https://www.twitter.com/",
          img: require("@/assets/social-network-icons/twitter.png"),
          iconName: "twitter",
        },
        {
          to: "https://www.linkedin.com/",
          img: require("@/assets/social-network-icons/linkedin.png"),
          iconName: "linkedin",
        },
      ],
    };
  },
};
</script>

<style scoped>
.social-icons-wrapper {
  max-width: 100px;
  height: 20px;
}
</style>
