<script setup lang="ts">
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
              {{ $t('LandingPageHeading') }}
              <span class="animate-pulse">💎</span>
            </h2>
            <p class="dark:text-white">
              {{ $t('LandingPageDesc') }}
            </p>
          </div>
          <div class="mt-5 flex w-full shadow sm:mt-10 sm:w-fit">
            <input
              type="text"
              :placeholder="$t('EmailAddress')"
              class="w-full rounded-l px-4 py-2 text-sm outline-none sm:w-80 sm:py-4 sm:text-base"
            />
            <button
              type="button"
              class="rounded-r bg-red-600 px-4 py-2 font-semibold text-white sm:px-8"
            >
              {{ $t('Subscribe') }}
            </button>
          </div>
          <div
            class="mt-5 flex flex-col space-y-3 text-xs sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <NuxtLink
              :to="{ name: 'designs' }"
              class="rounded bg-white px-4 py-1 text-sm text-gray-400 shadow hover:bg-gray-100 dark:bg-gray-600 hover:dark:bg-gray-700"
              >{{ $t('FreeResources') }}</NuxtLink
            >
            <NuxtLink
              :to="{ name: 'app-ideas' }"
              class="rounded bg-white px-4 py-1 text-sm text-gray-400 shadow hover:bg-gray-100 dark:bg-gray-600 hover:dark:bg-gray-700"
              >{{ $t('AppIdeas') }}</NuxtLink
            >
            <span
              class="rounded bg-white px-4 py-1 text-sm text-gray-400 shadow hover:bg-gray-100 dark:bg-gray-600 hover:dark:bg-gray-700"
              >{{ $t('FreeTips') }}</span
            >
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
          {{ $t('WhatItIs') }}
        </h4>
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div
            class="flex flex-col space-y-4 rounded border bg-white p-10 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:space-y-0"
            v-for="i in 4"
            :key="i"
          >
            <img
              src="https://oliver-new.netlify.app/images/icon/pen&ruller.svg"
              alt=""
              class="h-10 w-10"
            />
            <div class="space-y-2 sm:pl-8">
              <h4 class="text-lg font-bold sm:text-xl">
                {{ $t('WhatItIsHeading') }}
              </h4>
              <p class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                {{ $t('WhatItIsDesc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end hero -->

    <section class="bg-green-600 px-10 py-20 text-white sm:px-0">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-10 sm:flex-row sm:space-y-0"
      >
        <div class="space-y-4">
          <h4 class="text-2xl font-semibold">
            {{ $t('ContributeReq') }}
          </h4>
          <p class="text-sm sm:text-base">
            {{ $t('ContributeReqDesc') }}
          </p>
        </div>
        <button
          class="w-full rounded bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-orange-500 sm:w-fit sm:text-base"
        >
          {{ $t('Contribute') }}
        </button>
      </div>
    </section>
  </div>
</template>
