<template>
  <section class="cta-section padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div
        class="cta-content text-align-center relative border-radius-12"
        data-aos="flip-down"
      >
        <div class="tint border-radius-12 flex justify-center">
          <div class="content-wrapper">
            <h2 class="font-48 white-text">
              You can contribute to make the environment greener!
            </h2>
            <div class="button-row flex justify-center wrap">
              <buttonComp class="primary-btn" @click="popupStore.popupActivate"
                >Join as a volunteer</buttonComp
              >
              <buttonComp
                class="secondary-btn"
                @click="$router.push('/donation')"
                >Donate</buttonComp
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <popupComp :popupActive="popupStore.popupActive"></popupComp>
  </section>
</template>

<script>
export default {};
</script>

<script setup>
import buttonComp from "../buttonComps/buttonComp.vue";
import { usePopupStore } from "@/stores/popupStore";
import popupComp from "./popupComp.vue";

const popupStore = usePopupStore();
</script>

<style scoped>
.cta-content {
  background: url("@/assets/ctaImages/ctaImage.png") no-repeat;
  background-size: cover;
  height: 24em;
  background-position-x: 50%;
}

.content-wrapper {
  width: 39.406875em;
}

.tint {
  z-index: 4;
  padding: 93px 5px 92px;
}

.button-row {
  gap: 20px 31.82px;
  margin-top: 32px;
}

.primary-btn {
  width: 12.5rem;
  height: 3.1875rem;
}

.secondary-btn {
  width: 7.1875rem;
}

@media all and (max-width: 41.875em) {
  h2 {
    font-size: 6.2vw;
  }
}
</style>
