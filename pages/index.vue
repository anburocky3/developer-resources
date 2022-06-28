<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '~/stores'

const globalStore = useStore()
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

definePageMeta({
  title: '20+ Free Developer Collections'
})
</script>

<template>
  <div>
    <!-- hero -->
    <section class="mt-10 bg-red-50 py-20 dark:bg-gray-800 sm:py-32">
      <div
        class="container mx-auto flex flex-col items-center justify-around space-y-10 px-5 sm:flex-row sm:space-y-0 sm:px-0"
      >
        <div class="max-w-2xl">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold dark:text-white sm:text-6xl">
              {{ $t('landingPageHeading') }}
              <span class="animate-pulse">💎</span>
            </h2>
            <p class="dark:text-white">
              {{ $t('landingPageDesc') }}
            </p>
          </div>
          <div class="mt-5 flex w-full sm:mt-10 sm:w-fit">
            <div class="flex flex-wrap gap-4">
              <a
                :href="globalStore.social.youtube"
                class="rounded bg-red-600 px-4 py-3 !font-sans font-medium text-white hover:bg-red-700"
                target="_blank"
              >
                <IconsYouTube class="text-lg" />
                {{ $t('learnProgrammingBtn') }}
                <span class="!font-malar">({{ $t('tamil') }})</span>
              </a>
              <a
                :href="globalStore.social.discord"
                class="rounded bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
                target="_blank"
              >
                <IconsDiscord class="text-lg" />
                Discord
              </a>
            </div>
          </div>
        </div>
        <div class="">
          <img
            src="https://demo.epic-webdesign.com/tf-smart/v1/images/ui-design.png"
            alt=""
            class="w-full"
          />
        </div>
      </div>
    </section>

    <section class="dark:bg-gray-700">
      <div
        class="mx-auto max-w-6xl px-5 py-20 dark:text-white sm:py-32 sm:px-0"
      >
        <h4 class="mb-10 text-center text-2xl font-bold sm:mb-20 sm:text-4xl">
          {{ $t('whatItIs') }}
        </h4>
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div
            class="flex flex-col space-y-4 rounded border bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:space-y-0"
          >
            <img :src="$t('features[0].icon')" alt="" class="h-10 w-10" />
            <div class="space-y-2 sm:pl-8">
              <h4 class="text-lg font-bold sm:text-xl">
                {{ $t('features[0].title') }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                {{ $t('features[0].desc') }}
              </p>
            </div>
          </div>
          <div
            class="flex flex-col space-y-4 rounded border bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:space-y-0"
          >
            <img :src="$t('features[1].icon')" alt="" class="h-10 w-10" />
            <div class="space-y-2 sm:pl-8">
              <h4 class="text-lg font-bold sm:text-xl">
                {{ $t('features[1].title') }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                {{ $t('features[1].desc') }}
              </p>
            </div>
          </div>
          <div
            class="flex flex-col space-y-4 rounded border bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:space-y-0"
          >
            <img :src="$t('features[2].icon')" alt="" class="h-10 w-10" />
            <div class="space-y-2 sm:pl-8">
              <h4 class="text-lg font-bold sm:text-xl">
                {{ $t('features[2].title') }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                {{ $t('features[2].desc') }}
              </p>
            </div>
          </div>
          <div
            class="flex flex-col space-y-4 rounded border bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:space-y-0"
          >
            <img :src="$t('features[3].icon')" alt="" class="h-10 w-10" />
            <div class="space-y-2 sm:pl-8">
              <h4 class="text-lg font-bold sm:text-xl">
                {{ $t('features[3].title') }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                {{ $t('features[3].desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end hero -->

    <section class="bg-green-600 px-10 py-20 text-white sm:px-0">
      <div
        class="mx-auto flex max-w-6xl flex-col items-baseline space-y-10 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
      >
        <div class="space-y-4">
          <h4 class="text-2xl font-semibold">
            {{ $t('contribution.title') }}
          </h4>
          <p class="text-sm sm:text-base">
            {{ $t('contribution.desc') }}
          </p>
        </div>
        <a
          :href="`${globalStore.app.source}/fork`"
          target="_blank"
          :title="globalStore.app.name.long"
          class="rounded bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-orange-500 sm:w-fit sm:text-base"
        >
          {{ $t('contribute') }}
        </a>
      </div>
    </section>
  </div>
</template>
