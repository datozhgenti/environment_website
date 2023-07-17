<template>
  <section class="projects-section padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div class="heading-wrapper center-with-margin" data-aos="flip-up">
        <h6 class="font-16 letter-spacing-2 primary-text text-align-center">
          PROJECTS WE HAVE DONE
        </h6>
        <h2 class="font-48 primary-text text-align-center">
          We are creating a sustainable society, for everyone.
        </h2>
      </div>
      <projectsRow></projectsRow>
    </div>
  </section>
</template>

<script setup>
import projectsRow from "../projectsRowComps/projectsRow.vue";
</script>

<style scoped>
.heading-wrapper {
  max-width: 43.75em;
  margin-bottom: 64px;
}

h2 {
  margin-top: 16px;
}

@media all and (max-width: 42.5em) {
  h2 {
    font-size: 7.06vw;
  }
}

.padding-top-bottom-96 {
  padding-bottom: 0;
}
</style>
