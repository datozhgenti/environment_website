<template>
  <nav class="fixed">
    <div class="wrapper flex space-between">
      <div class="website-name-wrapper flex align-center">
        <router-link to="/home" class="environment-text font-bold font-20 block"
          >{Environment</router-link
        >
      </div>
      <div class="links-wrapper flex row-gap-40 align-center">
        <router-link
          v-for="link in pageLinks"
          :key="link"
          class="secondary-text block font-medium"
          :to="link.to"
          >{{ link.page }}</router-link
        >
        <buttonComp
          class="navbar-btn margin-top-bottom-12"
          @click="$router.push('/donation')"
        ></buttonComp>
      </div>
      <div class="responsive-links-wrapper flex align-center">
        <img
          src="@/assets/burger-menu-icons/burger-menu-icon.svg"
          class="block margin-top-bottom-12"
          alt="burger menu icon"
          @click="activateResponsiveNav"
        />
        <teleport to="body">
          <transition name="fade">
            <div class="menu-overlay fixed" v-if="responsiveNavActive">
              <div class="close-icon-wrapper flex flex-end">
                <img
                  src="@/assets/close-icons/close-icon.svg"
                  @click="deactivateResponsiveNav"
                  alt="close icon"
                />
              </div>
              <div class="links absolute">
                <router-link
                  v-for="link in pageLinks"
                  :key="link"
                  class="secondary-text block font-medium font-48"
                  @click="deactivateResponsiveNav"
                  :to="link.to"
                  >{{ link.page }}</router-link
                >
                <buttonComp
                  class="navbar-btn"
                  @click="$router.push('/donation')"
                ></buttonComp>
              </div>
            </div>
          </transition>
        </teleport>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      responsiveNavActive: false,
      pageLinks: [
        { page: "Home", to: "/home" },
        { page: "About us", to: "/about" },
        { page: "What We Do", to: "/what-we-do" },
        { page: "Media", to: "/media" },
        { page: "Contact", to: "/contact" },
      ],
    };
  },
  methods: {
    activateResponsiveNav() {
      this.responsiveNavActive = true;
    },

    deactivateResponsiveNav() {
      this.responsiveNavActive = false;
    },
  },
};
</script>

<script setup>
import buttonComp from "../buttonComps/buttonComp.vue";
</script>

<style scoped>
.router-link-active {
  color: var(--black);
}

nav {
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 20px;
}

img {
  width: 40px;
  height: 40px;
}

.responsive-links-wrapper {
  display: none;
}

.menu-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: #ffffff;
  padding: 20px;
}

.links {
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.links button,
.links a + a {
  margin-top: 10px;
}

@media all and (max-width: 850px) {
  .links-wrapper {
    display: none;
  }

  .responsive-links-wrapper {
    display: block;
  }
}

@media all and (max-width: 521px) {
  .links a {
    font-size: 9vw;
  }
}
</style>

<style>
.row-gap-40 {
  gap: 40px;
}

.margin-top-bottom-12 {
  margin: 12px 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-in-out;
}
</style>
