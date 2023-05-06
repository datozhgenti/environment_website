<template>
  <header class="top-from-nav relative">
    <video
      ref="video"
      src="@/assets/videos/waterfall.mp4"
      class="w100 h100 block object-fit-cover"
      loop
      muted="false"
    ></video>
    <div class="header-content absolute left-right-padding-20">
      <div class="wrapper">
        <div class="content">
          <h1 class="white-text font-64">
            Save the environment today for a better tomorrow
          </h1>
          <div class="content-btns flex space-between">
            <buttonComp
              class="secondary-btn"
              @click="$router.push('/what-we-do')"
              >What we do</buttonComp
            >
            <div
              class="video-pause-icon flex align-center pointer"
              @click="pauseVideo"
              v-if="videoIsPlaying"
            >
              <img
                src="@/assets/playPauseIcons/pause_icon.svg"
                alt="video pause icon"
              />
              <p class="white-text font-medium pause-text">Pause Video</p>
            </div>
            <div
              class="video-play-icon flex align-center pointer"
              @click="playVideo"
              v-else
            >
              <img
                src="@/assets/playPauseIcons/play_icon.png"
                alt="video play icon"
              />
              <p class="white-text font-medium play-text">Play Video</p>
            </div>
          </div>
        </div>
        <div class="statistics-wrapper flex space-between">
          <p class="font-medium font-18 white-text relative">
            23,800 trees planted
          </p>
          <div class="line-wrapper flex align-center">
            <hr class="w100" />
          </div>
          <p class="font-medium font-18 white-text">5840 donations collected</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<script setup>
import { ref } from "vue";
import buttonComp from "../buttonComps/buttonComp.vue";

const videoIsPlaying = ref(false);

const video = ref(null);

function playVideo() {
  video.value.play();

  videoIsPlaying.value = true;
}

function pauseVideo() {
  video.value.pause();

  videoIsPlaying.value = false;
}
</script>

<style scoped>
header {
  height: 45.9375em;
}

.header-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  margin-top: 128px;
  width: 40em;
}

.content-btns {
  margin-top: 48px;
  width: 19.5em;
}

.video-play-icon img,
.video-pause-icon img {
  width: 1.5em;
  height: 1.5em;
}

.video-play-icon p,
.video-pause-icon p {
  margin-left: 8px;
}

.statistics-wrapper {
  margin-top: 12em;
}

.line-wrapper {
  width: 67.3%;
  margin-right: 23px;
}

hr {
  border: 1px solid var(--border);
}

@media all and (max-width: 41.875em) {
  .content {
    width: auto;
  }
}

@media all and (max-width: 40.8125em) {
  h1 {
    font-size: 8vw;
  }
}

@media all and (max-width: 23.4375em) {
  .content-btns {
    width: auto;
  }
}

@media all and (max-width: 26.5625em) {
  .secondary-btn {
    font-size: 16px;
  }

  .pause-text,
  .play-text {
    font-size: 14px;
  }
}
</style>
