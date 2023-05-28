<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* css variables */

:root {
  --green-primary: #70c174;
  --green-secondary: #bef3c0;
  --green-tertiary: #eff7f2;
  --black: #0b0706;
  --primary-text: #1d2130;
  --secondary-text: #525560;
  --off-white: #ebf0f9;
  --border: #e5e5e5;
  --environment-color: #111111;
}

/* all text colors */

.primary-text {
  color: var(--primary-text);
}

.secondary-text {
  color: var(--secondary-text);
}

.environment-text {
  color: var(--environment-color);
}

.white-text {
  color: #ffffff;
}

/* all background colors */

.bg-green-primary {
  background-color: var(--green-primary);
}

.bg-green-secondary {
  background-color: var(--green-secondary);
}

.bg-green-ter {
  background-color: var(--green-tertiary);
}

.bg-black {
  background-color: var(--black);
}

.bg-off-white {
  background-color: var(--off-white);
}

.bg-white {
  background-color: #ffffff;
}

/* all fonts  */

@font-face {
  font-family: "Roboto-400";
  src: url("@/fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto-500";
  src: url("@/fonts/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto-700";
  src: url("@/fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

/* all element styles  */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto-400", sans-serif;
}

/*all font weights */

.font-regular {
  font-family: "Roboto-400", sans-serif;
}

.font-medium {
  font-family: "Roboto-500", sans-serif;
}

.font-bold {
  font-family: "Roboto-700", sans-serif;
}

/* all heading font sizes */

.font-12 {
  font-size: 0.75em;
}

.font-14 {
  font-size: 0.875em;
}

.font-16 {
  font-size: 1em;
}

.font-18 {
  font-size: 1.125em;
}

.font-20 {
  font-size: 1.25em;
}

.font-24 {
  font-size: 1.5em;
}

.font-28 {
  font-size: 1.75em;
}

.font-40 {
  font-size: 2.5em;
}

.font-48 {
  font-size: 3em;
}

.font-56 {
  font-size: 3.5em;
}

.font-64 {
  font-size: 4em;
}

/* all paragraph font sizes */

.paragraph-small {
  font-size: 0.875em;
}

/* wrapper element */

.wrapper {
  max-width: 1279px;
  margin: 0 auto;
}

/* a tag default styles cancel */

a {
  text-decoration: none;
}

/* displays */

.flex {
  display: flex;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

/* justify-content styles */

.space-between {
  justify-content: space-between;
}

.flex-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.space-evenly {
  justify-content: space-evenly;
}

/* align-item styles */

.align-center {
  align-items: center;
}

/* button styles */

.primary-btn,
.secondary-btn {
  padding: 16px 32px;
}

.navbar-btn,
.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 4px;
}

.navbar-btn,
.primary-btn {
  color: #ffffff;
}

.primary-btn {
  background-color: var(--green-primary);
}

.secondary-btn {
  background-color: #ffffff;
  color: var(--primary-text);
}

.navbar-btn {
  background-color: var(--primary-text);
  padding: 12px 32px;
}

/* cursors */

.pointer {
  cursor: pointer;
}

/* positions */

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

/* top from fixed nav */

.top-from-nav {
  margin-top: 64px;
}

/* widths */

.w100 {
  width: 100%;
}

.right-width-480 {
  width: 30em;
}

/* heights */

.h100 {
  height: 100%;
}

.height-448 {
  height: 448px;
}

/* object-fits */

.object-fit-cover {
  object-fit: cover;
}

/* paddings */

.left-right-padding-20 {
  padding-left: 20px;
  padding-right: 20px;
}

.left-padding-95 {
  padding-left: 95px;
}

.padding-top-bottom-96 {
  padding-top: 96px;
  padding-bottom: 96px;
}

.padding-bottom-48 {
  padding-bottom: 48px;
}

/* letter spacings */

.letter-spacing-2 {
  letter-spacing: 2px;
}

/* border-radiuses */

.border-radius-12 {
  border-radius: 12px;
}

.border-radius-4 {
  border-radius: 4px;
}

.border-radius-8 {
  border-radius: 8px;
}

.border-radius-full {
  border-radius: 50%;
}

/* flex-wraps */

.wrap {
  flex-wrap: wrap;
}

/* flex-shrinks */

.flex-shrink-0 {
  flex-shrink: 0;
}

/* flex grow */

.flex-grow-1 {
  flex-grow: 1;
}

/* margins */

.margin-right-40 {
  margin-right: 40px;
}

/* gaps */

.row-gap-40 {
  row-gap: 40px;
}

/* line heights */

.line-height-26 {
  line-height: 26px;
}

.line-height-28 {
  line-height: 28px;
}

.line-height-30 {
  line-height: 30px;
}

.line-height-42 {
  line-height: 42px;
}

.line-height-19 {
  line-height: 19px;
}

.line-height-56 {
  line-height: 56px;
}

.line-height-23 {
  line-height: 23px;
}

.line-height-38 {
  line-height: 38px;
}

/* background sizes */

.background-size-cover {
  background-size: cover;
}

/* background repeat */

.background-no-repeat {
  background-repeat: no-repeat;
}

/* opacity */

#opacity-8 {
  background-color: rgba(11, 7, 6, 0.8);
}

.opacity-60 {
  opacity: 0.6;
}

.opacity-7 {
  opacity: 0.7;
}

/* margins */

.margin-bottom-32 {
  margin-bottom: 32px;
}

.center-with-margin {
  margin: 0 auto;
}

/* text aligns */

.text-align-center {
  text-align: center;
}

.self-align-center {
  align-self: center;
}

/* tint */

.tint {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(11, 7, 6, 0.5);
}

/* responsive styles */

@media all and (max-width: 72.625em) {
  #left-responsive {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #right-responsive {
    width: 100%;
  }

  .left-padding-95 {
    padding: 0;
  }
}

@media all and (max-width: 42.5em) {
  #header-responsive {
    font-size: 7vw;
  }

  #auto {
    width: auto;
  }
}
</style>
