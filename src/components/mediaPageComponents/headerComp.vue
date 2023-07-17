<template>
  <header
    class="padding-top-bottom-96 left-right-padding-20 bg-green-ter top-from-nav"
  >
    <div class="wrapper">
      <div class="header-content flex space-between wrap row-gap-40">
        <div class="left left-padding-95" data-aos="fade-right">
          <titleComp>TOP NEWS</titleComp>
          <h1 class="font-56 primary-text">
            Our goal is to make water available for everyone
          </h1>
          <p class="secondary-text line-height-26">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
          <buttonComp
            class="primary-btn"
            @click="$router.push('/blog-post-inner')"
            >Read more</buttonComp
          >
        </div>
        <div class="right bg-white border-radius-12" data-aos="fade-left">
          <mediaHeaderCard
            v-for="blog in blogs"
            :key="blog"
            :imgProp="blog.img"
            :titleProp="blog.title"
            :subtitleProp="blog.subtitle"
            class="blog-card"
          ></mediaHeaderCard>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          img: require("@/assets/blog-post-images/Thumbnail1.png"),
          title: "Don’t destroy greenery and don’t spoil scenery.",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail5.png"),
          title: "Why saving wildlife is extremely important",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
        },
        {
          img: require("@/assets/blog-post-images/Thumbnail6.png"),
          title: "Caring for the present is caring for the future",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
        },
      ],
    };
  },
};
</script>

<script setup>
import buttonComp from "../buttonComps/buttonComp.vue";
import titleComp from "../titleComps/titleComp.vue";
import mediaHeaderCard from "../cards/mediaHeaderCard.vue";
</script>

<style scoped>
.left,
.right {
  max-width: 37em;
}

.right {
  padding: 24px;
  padding-right: 56px;
}

h1 {
  margin: 1rem 0 2rem;
}

p {
  margin-bottom: 2rem;
}

.primary-btn {
  width: 8.875rem;
  height: 3.1875rem;
}

.right .blog-card:not(.blog-card:last-child) {
  margin-bottom: 24px;
}

@media all and (max-width: 32.5em) {
  h1 {
    font-size: 7vw;
  }
}

@media all and (max-width: 40em) {
  .right {
    padding-right: 24px;
  }

  .header-content {
    justify-content: center;
  }
}
</style>
