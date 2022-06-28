<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
const openMenu = ref(false)

const closeMenu = () => {
  openMenu.value = false
}

const toggleMenu = () => {
  openMenu.value = !openMenu.value
}
</script>

<template>
  <OnClickOutside @trigger="closeMenu">
    <div
      class="relative mr-5 cursor-pointer space-y-1.5"
      @click="toggleMenu"
      :class="{ active: openMenu }"
    >
      <div class="one h-1 w-6 rounded bg-gray-500 dark:bg-white"></div>
      <div
        class="two h-1 w-6 rounded bg-gray-500 dark:bg-white"
        :class="{ hidden: openMenu }"
      ></div>
      <div class="three h-1 w-6 rounded bg-gray-500 dark:bg-white"></div>
    </div>
  </OnClickOutside>
</template>

<style scoped>
.one {
  animation-delay: 0.1s;
  transition: all 0.3s;
}

.three {
  transition: all 0.3s;
}

.active .one {
  position: absolute;
  transform: rotate(45deg);
}
.active .three {
  transform: rotate(-45deg);
}
</style>
