<script setup lang="ts">
import { useStore } from '@/stores'

const route = useRoute()
const globalStore = useStore()

useHead({
  title: computed(() => `${route.meta.title} - ${globalStore.app.name.long}`)
})
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <TheHeader />

    <div class="flex-1 bg-gray-100 dark:bg-gray-900">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
