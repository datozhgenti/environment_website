<template>
  <header
    class="padding-top-bottom-96 left-right-padding-20 bg-green-ter top-from-nav"
  >
    <div class="wrapper">
      <div class="header-content flex space-between wrap row-gap-40">
        <div class="left left-padding-95" data-aos="fade-right">
          <titleComp>CONTACT US</titleComp>
          <h1 class="font-56 primary-text">We'd love to hear from you</h1>
          <p class="primary-text line-height-26 opacity-7">
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </p>
        </div>
        <div class="right" data-aos="fade-left">
          <div class="info">
            <h6 class="primary-text font-24 line-height-38">Let's talk!</h6>
            <div class="info-content flex space-between">
              <p class="primary-text line-height-28">+1 23 456 789</p>
              <p class="primary-text line-height-28">hello@finsweet.com</p>
            </div>
          </div>
          <div class="location">
            <div class="address">
              <h6 class="primary-text font-20 line-height-32">Headoffice</h6>
              <p class="secondary-text line-height-26">
                8 Brewery Drive, Hudson, NH 03051 USA
              </p>
            </div>
            <div class="address">
              <h6 class="primary-text font-20 line-height-32">Branch Office</h6>
              <p class="secondary-text line-height-26">
                178 Marconi St., Venice, 34293 Italy
              </p>
            </div>
          </div>
          <socialIconsComp></socialIconsComp>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import titleComp from "../titleComps/titleComp.vue";
import socialIconsComp from "../social-icons-comps/socialIconsComp.vue";
</script>

<style scoped>
h1 {
  margin: 2rem 0 1rem;
}

.left {
  flex-basis: 36em;
}

.right {
  flex-basis: 18.875em;
}

.info {
  width: 17.4375em;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.info-content {
  margin-top: 10px;
}

.address p {
  margin-top: 0.5rem;
}

.address + .address {
  margin-top: 58px;
}

.location {
  margin: 32px 0 58px;
}

.header-content {
  max-width: 61.0625em;
}
</style>
