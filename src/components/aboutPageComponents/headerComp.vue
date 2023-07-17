<template>
  <header class="top-from-nav padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div class="header-content-wrapper left-padding-95">
        <titleComp data-aos="fade-right">Know about us</titleComp>
        <div class="header-content flex space-between wrap">
          <div class="left" data-aos="fade-right">
            <h1 class="font-56 primary-text">
              We are a nonprofit team working worldwide
            </h1>
          </div>
          <div class="right" data-aos="fade-left">
            <h3 class="font-20 primary-text line-height-30">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </h3>
            <p class="primary-text opacity-7 line-height-26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim elementum tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="wrapper height-448">
    <videoComp
      :videoUrl="require('@/assets/videos/saveEnv.mp4')"
      data-aos="flip-down"
    ></videoComp>
  </div>
</template>

<script setup>
import titleComp from "../titleComps/titleComp.vue";
import videoComp from "@/components/videoComps/videoComp.vue";
</script>

<style scoped>
.left {
  flex-basis: 39em;
}

.header-content {
  margin-top: 32px;
}

.right {
  flex-basis: 31em;
}

.right h3 {
  margin-bottom: 16px;
}

.right {
  padding-top: 16px;
}

@media all and (max-width: 39.75em) {
  h1 {
    font-size: 9vw;
  }
}
</style>
