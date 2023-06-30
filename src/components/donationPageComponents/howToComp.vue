<template>
  <section class="how-to padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div class="how-to-content flex space-between wrap row-gap-40">
        <div class="left">
          <h2 class="primary-text font-48">
            How you can contribute to protect Earth
          </h2>
          <p class="secondary-text line-height-26">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div class="right">
          <div class="tabs-wrapper flex space-between">
            <router-link
              class="secondary-text font-medium line-height-26"
              to="/donation"
              >Overview</router-link
            >
            <router-link
              class="secondary-text font-medium line-height-26"
              to="/donation/impact"
              >Impact</router-link
            >
            <router-link
              class="secondary-text font-medium line-height-26"
              to="/donation/what-you-get"
              >What You get</router-link
            >
          </div>
          <div class="tab-text flex">
            <router-view name="tab1"></router-view>
            <router-view name="tab2"></router-view>
            <router-view name="tab3"></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.left,
.right {
  flex-basis: 37em;
}

h2 {
  margin-bottom: 24px;
}

.how-to-content {
  border-bottom: 1px solid var(--border);
  padding-bottom: 96px;
}

a {
  padding: 8px 24px;
  display: block;
}

.tabs-wrapper {
  margin-top: 11px;
  border-bottom: 1px solid var(--border);
  max-width: 22.25em;
  margin-bottom: 24px;
}

.router-link-exact-active {
  color: var(--primary-text);
  position: relative;
}

.router-link-exact-active::after {
  content: "";
  position: absolute;
  width: 100%;
  display: block;
  border-bottom: 2px solid var(--green-primary);
  left: 0;
  bottom: -2px;
  animation: line-anim 500ms ease-in-out;
}

@keyframes line-anim {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media all and (max-width: 24.6875em) {
  a {
    padding: 8px 0;
    flex-grow: 1;
    text-align: center;
  }
}
</style>
