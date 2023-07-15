<template>
  <section class="about-section">
    <div class="wrapper">
      <div class="about-top flex space-between wrap row-gap-40">
        <div
          class="left left-padding-95 flex-shrink-0 margin-right-40"
          id="left-responsive"
          data-aos="flip-left"
        >
          <titleComp class="margin-top-62"></titleComp>
          <h2 class="font-48 primary-text" id="header-responsive">
            We help nature smile and survive everywhere
          </h2>
          <p class="secondary-text margin-bottom-34 line-height-26">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p class="secondary-text line-height-26">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
          <buttonComp
            class="primary-btn margin-top-48"
            @click="$router.push('/about')"
            >Learn more</buttonComp
          >
        </div>
        <div
          class="right flex-shrink-0 right-width-480"
          id="right-responsive"
          data-aos="flip-right"
        >
          <videoComp></videoComp>
        </div>
      </div>
      <div class="about-bottom" data-aos="flip-down">
        <supportersComp class="margin-bottom-32"></supportersComp>
      </div>
    </div>
  </section>
</template>

<script setup>
import titleComp from "../titleComps/titleComp.vue";
import buttonComp from "../buttonComps/buttonComp.vue";
import videoComp from "../videoComps/videoComp.vue";
import supportersComp from "../supportersComps/supportersComp.vue";
</script>

<script>
export default {};
</script>

<style scoped>
.about-section {
  padding: 96px 20px 64px;
}

.margin-top-62 {
  margin-top: 62px;
}

.margin-bottom-34 {
  margin-bottom: 34px;
}

.margin-top-48 {
  margin-top: 48px;
}

.about-bottom {
  margin-top: 64px;
}

.left {
  width: 703px;
}

.right {
  height: 36.125em;
}

h2 {
  margin: 32px 0;
}
</style>
