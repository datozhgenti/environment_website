<template>
  <section class="mission-section bg-green-ter left-right-padding-20">
    <div class="wrapper">
      <div class="mission-section-content">
        <div class="text-row flex space-evenly wrap">
          <div class="text" data-aos="flip-right">
            <h6 class="letter-spacing-2 font-16 primary-text">OUR MISSION</h6>
            <h3 class="font-28 line-height-42 primary-text">
              We make the world we save our own environment
            </h3>
            <p class="primary-text opacity-7 line-height-26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div class="text" data-aos="flip-left">
            <h6 class="letter-spacing-2 font-16 primary-text">OUR VISION</h6>
            <h3 class="font-28 line-height-42 primary-text">
              Plant more trees to make world air pollution free
            </h3>
            <p class="primary-text opacity-7 line-height-26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <supportersComp
          class="padding-bottom-48 primary-text"
          data-aos="flip-up"
        ></supportersComp>
      </div>
    </div>
  </section>
</template>

<script setup>
import supportersComp from "../supportersComps/supportersComp.vue";
</script>

<style scoped>
.mission-section {
  padding-top: 320px;
  padding-bottom: 96px;
  margin-top: -224px;
}

.text {
  flex-basis: 31em;
}

h3 {
  margin: 16px 0 8px;
}

.text-row {
  padding-bottom: 96px;
  row-gap: 25px;
}

@media all and (max-width: 69.375em) {
  .text:first-child {
    margin-right: 20px;
  }
}
</style>
