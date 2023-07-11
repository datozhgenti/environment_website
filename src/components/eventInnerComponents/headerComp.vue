<template>
  <header
    class="bg-green-ter padding-top-bottom-96 top-from-nav left-right-padding-20"
  >
    <div class="wrapper">
      <div class="header-content center-with-margin">
        <h1 class="primary-text font-56">
          Say no to using plastic and save Earth
        </h1>
        <div class="information flex wrap space-between">
          <div class="address flex align-center space-between">
            <img
              src="@/assets/event-inner-header-icons/icon1.png"
              alt="icon"
              width="20"
              height="24"
              class="block"
            />
            <p class="primary-text line-height-26 font-medium">
              8 Brewery Drive, Hudson, NH 03051, USA
            </p>
          </div>
          <div class="address flex align-center space-between">
            <img
              src="@/assets/event-inner-header-icons/icon2.png"
              alt="icon"
              width="22"
              height="24"
              class="block"
            />
            <p class="primary-text line-height-26 font-medium">
              September 3, 2021 8:30 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header-content {
  max-width: 48em;
}

.information {
  max-width: 37.375em;
  row-gap: 20px;
}

.address {
  column-gap: 8px;
}

.information {
  margin-top: 48px;
}
</style>
