<template>
  <div class="library-container">
    <LibraryItemList />
  </div>
</template>

<script>
import LibraryItemList from '../components/library/LibraryItemList.vue'

export default {
  name: 'Library',
  components: {
    LibraryItemList
  }
}
</script>
<style scoped>
.library-container {
}
</style>