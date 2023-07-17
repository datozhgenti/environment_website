export default function deleteAnimDelays(maxWidth, projects) {
  const mediaQuery = window.matchMedia(`(max-width: ${maxWidth})`);

  const changeCallback = (e) => {
    if (e.matches) {
      projects.forEach((val) => {
        val.delay = 0;
      });
    } else {
      let delayCounter = 0;
      projects.forEach((val) => {
        val.delay === 0 ? (delayCounter += 200) : null;
        val.delay === 0 ? (val.delay += delayCounter) : null;
      });
    }
  };

  mediaQuery.addEventListener("change", changeCallback);

  changeCallback(mediaQuery);
}
