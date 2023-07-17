<template>
  <header
    class="top-from-nav padding-top-bottom-96 left-right-padding-20 bg-green-ter"
  >
    <div class="wrapper">
      <div class="header-content flex space-between wrap row-gap-40">
        <div class="left left-padding-95" data-aos="fade-right">
          <titleComp>DONATE</titleComp>
          <h1 class="primary-text font-56">Making a donation for Nature.</h1>
          <p class="secondary-text line-height-26">
            When you donate, you’re supporting effective solutions to big
            environmental challenges—an investment in the future of our planet.
          </p>
          <buttonComp class="primary-btn">Donate now</buttonComp>
        </div>
        <div class="right" data-aos="fade-left">
          <img
            src="@/assets/donate-page-pictures/donate-header-img.png"
            alt="donate img"
            class="block w100 object-fit-cover border-radius-12"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import titleComp from "../titleComps/titleComp.vue";
import buttonComp from "../buttonComps/buttonComp.vue";
</script>

<style scoped>
h1 {
  margin: 32px 0 14px;
}

.left {
  flex-basis: 45.25em;
}

.right {
  flex-basis: 30em;
}

.left p {
  max-width: 32.3125em;
  margin-bottom: 32px;
}

.primary-btn {
  width: 9.3125rem;
  height: 3.1875rem;
}

img {
  height: 384px;
}
</style>
