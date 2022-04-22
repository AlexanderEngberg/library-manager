<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from './AppLayoutDefault'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'AppLayout',
  setup() {
    const layout = ref()
    const route = useRoute()
    watch(
      () => String(route.meta?.layout) || undefined,
      async (metaLayout) => {
        try {
          const component = metaLayout && await import(/* @vite-ignore */ `./${metaLayout}.vue`)
          layout.value = markRaw(component?.default || AppLayoutDefault)
        } catch (e) {
          layout.value = markRaw(AppLayoutDefault)
        }
      },
      { immediate: true }
    )
    return { layout }
  }
}
</script>