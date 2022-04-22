<template>
  <div>
    <header class="header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from './AppLayoutLinks'

export default {
  name: "AppLayoutLibrary",
  components: {
    AppLayoutLinks
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: blue;
}
</style>