<script setup lang="ts">
import { useStore } from '@/stores'
import TheFooter from '@/components/TheFooter.vue'

const route = useRoute()
const globalStore = useStore()

useMeta({
  title: computed(() => `${route.meta.title} - ${globalStore.app.name.long}`)
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />

    <div class="mt-10 sm:mt-16">
      <slot />
    </div>

    <TheFooter />
  </div>
</template>
