<template>
  <div class="media-header-card flex">
    <div class="image-wrapper">
      <img
        :src="imgProp"
        alt=""
        height="160"
        class="block w100 object-fit-cover border-radius-8"
      />
    </div>
    <div class="text-wrapper flex align-center">
      <div class="text-wrapper-content">
        <h6 class="font-20 line-height-30">
          {{ titleProp }}
        </h6>
        <p class="secondary-text line-height-26">
          {{ subtitleProp }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgProp", "titleProp", "subtitleProp"],
};
</script>

<style scoped>
.image-wrapper {
  max-width: 12em;
}

.text-wrapper {
  max-width: 18.5em;
}

h6 {
  margin-bottom: 0.5rem;
}
.media-header-card {
  column-gap: 24px;
  row-gap: 5px;
}

@media all and (max-width: 40em) {
  .media-header-card {
    flex-direction: column;
  }

  .image-wrapper {
    max-width: 100%;
  }
}
</style>
