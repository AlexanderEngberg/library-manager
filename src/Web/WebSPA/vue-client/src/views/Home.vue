<template>
  <div class="area-section">
    <Area name="Library"/>
    <Area name="Employee"/>
  </div>
</template>

<script>
import Area from '../components/Area.vue'

export default {
  name: 'Home',
  components: {
    Area
  }
}
</script>

<style scoped>
.area-section {
  display: flex;
  justify-content: center;
  margin-top: 250px;
  flex-wrap: wrap;
  gap: 50px;
}
</style>