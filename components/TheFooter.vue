<script setup lang="ts">
import { useStore } from '@/stores'

const globalStore = useStore()
</script>
<template>
  <footer
    class="border-t border-gray-800 bg-gray-900 p-5 text-sm text-gray-600"
  >
    <div
      class="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
    >
      <span
        >{{$t('CopyRight')}} &copy; {{ new Date().getFullYear() }} -
        <NuxtLink :to="{ name: 'index' }" class="hover:text-orange-500">{{
          $t(globalStore.app.name.long)
        }}</NuxtLink>
      </span>
      <span>- {{$t('AllRightsReserved')}}</span>
    </div>
  </footer>
</template>
