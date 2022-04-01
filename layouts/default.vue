<script setup lang="ts">
import { useStore } from '@/stores'

const globalStore = useStore()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />

    <main class="mt-10 sm:mt-16">
      <slot />
    </main>

    <footer class="bg-gray-900 p-5 text-sm text-gray-100">
      <div
        class="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
      >
        <span
          >Copyright &copy; {{ new Date().getFullYear() }} -
          <NuxtLink :to="{ name: 'index' }" class="hover:text-orange-500">{{
            globalStore.app.name.long
          }}</NuxtLink>
        </span>
        <span>- All Rights Reserved</span>
      </div>
    </footer>
  </div>
</template>
