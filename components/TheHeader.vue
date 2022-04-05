<script setup lang="ts">
import { ref } from 'vue'
import { OnClickOutside } from '@vueuse/components'
import { useStore } from '@/stores'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const globalStore = useStore()

const isThemeDialogOpened = ref(false)
const isLangDialogOpened = ref(false)
const isMenuOpened = ref(false)

const toggleThemeDialog = () => {
  isMenuOpened.value = false
  isLangDialogOpened.value = false
  isThemeDialogOpened.value = !isThemeDialogOpened.value
}
const toggleLangDialog = () => {
  isThemeDialogOpened.value = false
  isMenuOpened.value = false
  isLangDialogOpened.value = !isLangDialogOpened.value
}
const toggleMenu = () => {
  isThemeDialogOpened.value = false
  isLangDialogOpened.value = false
  isMenuOpened.value = !isMenuOpened.value
  console.log(isMenuOpened)
}

const closeDialog = () => {
  isThemeDialogOpened.value = false
  isMenuOpened.value = false
  isLangDialogOpened.value = false
}
const changeTheme = (color: string) => {
  useColorMode().preference = color
  closeDialog()
}
const changeLang = (lang: string) => {
  if (lang === 'ta') {
    document.body.classList.add('!font-malar')
  } else {
    document.body.classList.remove('!font-malar')
  }
  i18n.locale.value = lang
  localStorage.setItem('lang', lang)
  closeDialog()
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 left-0 z-50 border-b-2 border-orange-500 bg-white py-3 shadow-xl dark:bg-gray-800 sm:py-3"
  >
    <!-- bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]  -->
    <div
      class="container mx-auto flex items-center justify-between px-2 sm:px-0"
    >
      <div class="flex items-center">
        <NuxtLink
          :to="{ name: 'index', hash: '#' }"
          class="space-x-2 rounded-full px-2 py-0.5 !font-sans text-xl font-bold hover:text-orange-500 dark:text-white sm:px-4 sm:py-2"
        >
          <span class="">{{ globalStore.app.name.short }}</span>
        </NuxtLink>
      </div>
      <div class="flex items-center space-x-5 sm:space-x-10">
        <ul
          class="ml-2 hidden items-center text-sm sm:ml-10 sm:flex sm:space-x-10"
        >
          <li>
            <NuxtLink
              :to="{ name: 'index', hash: '#' }"
              class="font-medium hover:text-orange-500 dark:text-white hover:dark:text-orange-500"
            >
              <IconsHome class="h-5 w-5"
            /></NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'designs' }"
              class="font-medium hover:text-orange-500 dark:text-white"
              >{{ $t('Design') }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'app-ideas' }"
              class="font-medium hover:text-orange-500 dark:text-white"
              >{{ $t('AppIdeas') }}</NuxtLink
            >
          </li>
        </ul>
        <OnClickOutside
          @trigger="closeDialog"
          class="flex items-center space-x-5 sm:space-x-10"
        >
          <div class="relative">
            <button
              type="button"
              @click="toggleThemeDialog"
              class="flex items-center"
            >
              <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  class="fill-transparent"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  class="fill-slate-400 dark:fill-white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  class="fill-slate-400 dark:fill-white"
                ></path>
              </svg>
            </button>
            <ul
              v-if="isThemeDialogOpened"
              class="absolute top-10 -right-10 overflow-hidden rounded bg-white shadow"
            >
              <ColorScheme placeholder="..." tag="li">
                <li
                  v-for="color of ['light', 'dark']"
                  :key="color"
                  class="flex w-32 cursor-pointer space-x-4 px-4 py-2 capitalize text-gray-800 hover:bg-indigo-400 hover:text-white"
                  :class="{
                    'bg-gray-300 text-white':
                      !$colorMode.unknown && color === $colorMode.preference
                  }"
                  @click="changeTheme(color)"
                >
                  {{ $t(`${color}`) }}
                </li>
              </ColorScheme>
            </ul>
          </div>
          <div class="relative">
            <button
              type="button"
              @click="toggleLangDialog"
              class="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--fa6-solid h-6"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 640 512"
              >
                <path
                  class="fill-slate-400 dark:fill-white"
                  d="M448 164c11 0 20 8.1 20 20v4h60c11 0 20 8.1 20 20c0 11-9 20-20 20h-2l-1.6 4.5c-8.9 23.6-22.5 46.6-39.7 65.4c.9.5 1.8.2 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.8 27.5c-5.6 9.5-17.9 12.5-27.4 6.8l-18.9-11.3c-4.4-2.7-9.7-5.5-13.1-8.5c-10.5 7.5-21.9 14-33.9 19.4l-3.7 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-7 18.5-9.8l-12.1-12.2c-7.9-7.8-7.9-20.4 0-28.2c7.8-7.9 20.4-7.9 28.2 0l14.6 14.5l.6-.3c12.4-12.2 22.5-27.4 29.8-45H376c-11.9 0-20-8.1-20-20c0-11 8.1-20 20-20h52v-4c0-11 8.1-20 20-20v.9zm-288 69.2l19 42.8h-38.9l19.9-42.8zM0 128c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm320 256h256V128H320v256zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-63.98 144c-4.48 9.2.06 21.9 10.16 26.4c10.09 4.5 21.92-.1 26.42-10.2l8.9-21h73.6l8.9 21c4.5 10.1 16.3 14.7 26.4 10.2c10.1-4.5 14.7-17.2 10.2-26.4l-64-144z"
                ></path>
              </svg>
            </button>
            <ul
              v-if="isLangDialogOpened"
              class="absolute top-10 -right-10 overflow-hidden rounded bg-white shadow"
            >
              <ColorScheme placeholder="..." tag="li">
                <li
                  class="flex w-32 cursor-pointer space-x-4 px-4 py-2 capitalize text-gray-800 hover:bg-indigo-400 hover:text-white"
                  :class="{
                    'bg-gray-300 text-white': i18n.locale.value === 'en'
                  }"
                  v-on:click="changeLang('en')"
                >
                  English
                </li>
                <li
                  class="flex w-32 cursor-pointer space-x-4 px-4 py-2 capitalize text-gray-800 hover:bg-indigo-400 hover:text-white"
                  :class="{
                    'bg-gray-300 text-white': i18n.locale.value === 'ta'
                  }"
                  v-on:click="changeLang('ta')"
                >
                  {{ $t('Tamil') }}
                </li>
              </ColorScheme>
            </ul>
          </div>

          <div
            class="relative flex cursor-pointer select-none items-center space-x-2 rounded bg-gray-800 px-4 py-2 text-xs font-medium text-white shadow hover:bg-orange-500 dark:bg-orange-500 hover:dark:bg-orange-600 sm:text-sm"
            target="_blank"
            @click="toggleMenu"
          >
            <div class="flex items-center space-x-2">
              <span>Contribute</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              class="absolute left-0 top-12 overflow-hidden rounded-lg bg-white shadow-lg"
              v-if="isMenuOpened"
            >
              <ul class="text-gray-700">
                <li class="px-4 py-3 text-xs hover:bg-orange-200 sm:text-sm">
                  <a href="#"> Contributors </a>
                </li>
                <li class="px-4 py-3 text-xs hover:bg-orange-200 sm:text-sm">
                  <a
                    :href="globalStore.app.source"
                    target="_blank"
                    :title="globalStore.app.name.long"
                  >
                    Open Source
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </OnClickOutside>
      </div>
    </div>
  </header>
</template>

<style>
/* home route and active route will show in bold as it matches / and /about */
ul a.router-link-active {
  @apply text-green-600;
}
/* exact link will show the primary color for only the exact matching link */
ul a.router-link-exact-active {
  @apply text-orange-600 dark:text-orange-500;
}
</style>
