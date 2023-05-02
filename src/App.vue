<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* body styles */

body,
html {
  font-size: calc((16px / 100%) * 100);
}

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

.font-20 {
  font-size: 1.25em;
}

.font-28 {
  font-size: 1.75em;
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

/* justify-content styles */

.space-between {
  justify-content: space-between;
}

.flex-end {
  justify-content: flex-end;
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

/* center item */
</style>
