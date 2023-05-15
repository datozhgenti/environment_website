<template>
  <section class="blog-section left-right-padding-20" id="blogs">
    <div class="wrapper">
      <rigthLineTitleComp>Read Our News</rigthLineTitleComp>
      <div class="blog-posts-wrapper flex space-between wrap row-gap-40">
        <postCard
          v-for="post in posts"
          :key="post"
          :imgProp="post.img"
          :titleProp="post.title"
          :subtitleProp="post.subtitle"
        ></postCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          img: require("@/assets/blog-post-images/Thumbnail1.png"),
          title: "Don't destroy greenery and don't spoil scenery",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail2.png"),
          title: "Is climate change happening faster than expected?",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail3.png"),
          title: "Top 10 facts about wind farms you didn't know",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail4.png"),
          title: "Our goal is to make water available for everyone",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
        },
      ],
    };
  },
};
</script>

<script setup>
import postCard from "../cards/postCard.vue";
import rigthLineTitleComp from "../titleComps/rigthLineTitleComp.vue";
</script>

<style scoped>
.blog-posts-wrapper {
  margin-top: 48px;
  column-gap: 15px;
}

@media all and (max-width: 41.125em) {
  .blog-posts-wrapper {
    justify-content: center;
  }
}
</style>
