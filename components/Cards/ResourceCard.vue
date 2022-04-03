<script setup lang="ts">
import { getCategoryImage } from '@/utils/global'

defineProps<{
  resource: any
}>()
</script>

<template>
  <a
    :href="resource.link"
    target="_blank"
    class="dark:shadsow-none relative mx-auto w-full overflow-hidden rounded bg-white shadow hover:shadow-xl dark:bg-slate-900 dark:hover:shadow-md dark:hover:shadow-gray-800"
    :title="resource.description"
  >
    <!-- src="https://designresources.io/wp-content/uploads/2022/03/Frame-366-1024x774.jpg" -->
    <img
      v-if="!resource.img"
      :src="getCategoryImage(resource.category)"
      alt="Resource image"
      class="border-b-5 h-44 w-full border-indigo-500 object-cover shadow"
    />
    <div
      v-else
      class="flex h-40 w-60 items-center justify-center bg-indigo-500 font-semibold uppercase text-white"
    >
      {{ resource.category }}
    </div>
    <div
      class="absolute top-4 right-4 rounded-full bg-gray-800 px-2 py-1 text-xs uppercase text-white shadow"
    >
      {{ resource.category }}
    </div>
    <div class="space-y-2 px-4 py-4">
      <h2 class="text-md font-semibold">{{ resource.title }}</h2>
      <p class="text-sm text-gray-500 line-clamp-3">
        {{ resource.description }}
      </p>
    </div>
  </a>
</template>
