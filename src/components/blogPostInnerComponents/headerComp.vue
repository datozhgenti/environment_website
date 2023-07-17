<template>
  <header class="top-from-nav padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div
        class="header-text center-with-margin text-align-center"
        data-aos="fade-right"
      >
        <p class="primary-text font-medium line-height-26">21 DEC 2021</p>
        <h1 class="primary-text font-56">
          Is climate change happening faster than expected?
        </h1>
        <p class="secondary-text line-height-26">
          Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit
          dignissim nibh sit.
        </p>
      </div>
      <div class="header-image" data-aos="fade-left">
        <img
          src="@/assets/blog-post-inner-photos/header-photo.png"
          alt="blog post photo"
          class="w100 block object-fit-cover border-radius-12"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header-text {
  max-width: 64em;
}

h1 {
  margin: 32px 0 16px;
}

.header-image {
  margin-top: 48px;
}

@media all and (max-width: 47.5em) {
  h1 {
    font-size: clamp(0.625em, 10vw, 3.5em);
  }
}
</style>
