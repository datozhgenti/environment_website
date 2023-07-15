<template>
  <div
    class="post-card pointer"
    @click="$router.push('/blog-post-inner')"
    :data-aos-delay="animDelay"
  >
    <img :src="imgProp" alt="post image" class="block w100" />
    <h2 class="font-medium font-20 line-height-30">
      {{ titleProp }}
    </h2>
    <p class="secondary-text line-height-26">
      {{ subtitleProp }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["imgProp", "titleProp", "subtitleProp", "animDelay"],
};
</script>

<style scoped>
.post-card {
  width: 18.875em;
}

.post-card:hover h2 {
  text-decoration: underline;
}

h2 {
  color: #1c1d28;
  margin: 16px 0 8px;
}
</style>
