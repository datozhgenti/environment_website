<template>
  <footer class="bg-black padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div class="footer-content flex row-gap-40">
        <h3 class="white-text line-height-23" data-aos="fade-right">
          {Environment
        </h3>
        <div class="links-wrapper flex space-between" data-aos="fade-down">
          <div class="team-wrapper">
            <h2 class="white-text font-16 line-height-26">Our team</h2>
            <div class="team-links-wrapper margin-top-24">
              <router-link
                class="block font-14 white-text"
                v-for="link in teamLinks"
                :key="link"
                :to="link.to"
                >{{ link.name }}</router-link
              >
            </div>
          </div>
          <div class="more-wrapper">
            <h2 class="white-text font-16 line-height-26">More</h2>
            <div class="more-links-wrapper margin-top-24">
              <router-link
                class="block font-14 white-text"
                v-for="link in moreLinks"
                :key="link"
                :to="link.to"
                >{{ link.name }}</router-link
              >
            </div>
          </div>
          <div class="connect-wrapper">
            <h2 class="white-text font-16 line-height-26">Connect</h2>
            <div class="connect-links-wrapper margin-top-24">
              <a
                class="block font-14 white-text"
                v-for="link in connectLinks"
                :key="link"
                :href="link.to"
                target="_"
                >{{ link.name }}</a
              >
            </div>
          </div>
        </div>
        <div class="form-wrapper" data-aos="fade-left">
          <h2 class="font-40 white-text line-height-56">
            Subscribe to get latest updates
          </h2>
          <form @submit.prevent="" class="flex">
            <input
              type="email"
              placeholder="Your email"
              class="white-text border-radius-4"
            />
            <buttonComp class="secondary-btn flex-grow-1" type="submit"
              >Subscribe</buttonComp
            >
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      teamLinks: [
        { name: "About us", to: "/about" },
        { name: "Team", to: { path: "/about", hash: "#team" } },
        { name: "What we do", to: "/what-we-do" },
        { name: "Contact", to: "/contact" },
      ],
      moreLinks: [
        { name: "Projects", to: { path: "/home", hash: "#projects" } },
        { name: "Events", to: { path: "/home", hash: "#events" } },
        { name: "Donate", to: "/donation" },
        { name: "Blog", to: { path: "/home", hash: "#blogs" } },
      ],
      connectLinks: [
        { name: "Facebook", to: "https://www.facebook.com/" },
        { name: "Instagram", to: "https://www.instagram.com/" },
        { name: "Twitter", to: "https://twitter.com/" },
        { name: "Linkdin ", to: "https://www.linkedin.com/" },
      ],
    };
  },
};
</script>

<script setup>
import buttonComp from "../buttonComps/buttonComp.vue";
</script>

<style scoped>
.links-wrapper {
  flex-basis: 22.875em;
  margin-left: 9.147771696638%;
}

.form-wrapper {
  flex-basis: 34em;
  margin-left: 11.180609851446443%;
}

a {
  opacity: 0.78;
  line-height: 22px;
}

a:not(a:last-child) {
  margin-bottom: 24px;
}

.margin-top-24 {
  margin-top: 24px;
}

h3 {
  margin-top: 1px;
}

input {
  background-color: transparent;
  border: 1px solid rgba(235, 240, 249, 0.3);
  padding: 22px 10px 23px 24px;
  border-right: none;
  flex-basis: 25.5rem;
  height: 4rem;
}

input::placeholder {
  color: rgba(235, 240, 249, 0.3);

  opacity: 0.8;
}

input:focus {
  outline: none;
}

form {
  margin-top: 32px;
}

@media all and (max-width: 56.25em) {
  .footer-content {
    flex-wrap: wrap;
  }

  .form-wrapper,
  .links-wrapper {
    margin: 0;
  }

  h3 {
    width: 100%;
  }
}

@media all and (max-width: 23.4375em) {
  input {
    width: 62.98507462686567%;
  }
}
</style>
