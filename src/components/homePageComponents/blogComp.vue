<template>
  <section class="blog-section left-right-padding-20" id="blogs">
    <div class="wrapper">
      <rigthLineTitleComp v-if="textWithLine" data-aos="fade-right"
        >Read Our News</rigthLineTitleComp
      >
      <div
        class="another-text text-align-center center-with-margin"
        data-aos="fade-left"
        v-else
      >
        <h2 class="primary-text font-48">Read our Recent News</h2>
        <p class="secondary-text line-height-26 center-with-margin">
          Edit this text to make it your own. To edit, simply click directly on
          the text to start We are served
        </p>
      </div>
      <div class="blog-posts-wrapper flex space-between wrap row-gap-40">
        <postCard
          v-for="post in posts"
          :key="post"
          :imgProp="post.img"
          :titleProp="post.title"
          :subtitleProp="post.subtitle"
          :animDelay="post.delay"
          data-aos="fade-right"
        ></postCard>
      </div>
    </div>
  </section>
</template>

<script>
import deleteAnimDelays from "@/composables/deleteAnimDelays";
export default {
  data() {
    return {
      posts: [
        {
          img: require("@/assets/blog-post-images/Thumbnail1.png"),
          title: "Don't destroy greenery and don't spoil scenery",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
          delay: 200,
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail2.png"),
          title: "Is climate change happening faster than expected?",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
          delay: 400,
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail3.png"),
          title: "Top 10 facts about wind farms you didn't know",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
          delay: 600,
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail4.png"),
          title: "Our goal is to make water available for everyone",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
          delay: 800,
        },
      ],
    };
  },
  props: {
    textWithLine: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    deleteAnimDelays("80.75em", this.posts);
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

h2 {
  margin-bottom: 16px;
}

.another-text {
  max-width: 30.5em;
}

.another-text p {
  max-width: 28.125em;
}
</style>
