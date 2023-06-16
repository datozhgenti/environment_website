<template>
  <header class="top-from-nav padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div class="header-content flex space-between wrap row-gap-40">
        <div class="left left-padding-95">
          <titleComp>WHAT WE DO</titleComp>
          <h1 class="font-56 primary-text">We are working worldwide</h1>
          <p class="line-height-26 secondary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div class="right">
          <img
            src="@/assets/what-we-do-header-images/clear-environment.png"
            alt="clear environment"
            class="block w100 object-fit-cover border-radius-12"
            height="384"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import titleComp from "../titleComps/titleComp.vue";
</script>

<style scoped>
h1 {
  margin: 32px 0 34px;
}

.left {
  max-width: 43.1875em;
}

.right {
  max-width: 30em;
}

@media all and (max-width: 75.625em) and (min-width: 72.625em) {
  .right {
    padding-left: 96px;
  }
}
</style>
