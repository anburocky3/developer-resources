<script setup lang="ts">
definePageMeta({
  title: 'Realistic App Ideas'
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-5 dark:bg-gray-900 sm:p-10">
    <TheHeader />

    <main
      class="container mx-auto mt-20 rounded bg-white p-5 dark:bg-gray-800 dark:text-white"
    >
      <section class="my-10 space-y-10 text-center">
        <div class="space-y-3">
          <h4 class="text-sm font-medium text-gray-500 sm:text-base">
            {{$t('AppIdeasPage.Title')}}
          </h4>
          <h2 class="text-2xl font-bold sm:text-3xl">
            {{$t('AppIdeasPage.SubTitle')}}
          </h2>
        </div>
        <div class="flex justify-center">
          <input
            type="text"
            :placeholder="$t('SearchByAnything')"
            class="w-full rounded-l border-2 bg-gray-200 px-4 py-2 shadow outline-none focus:border-indigo-500 dark:border-gray-500 dark:bg-gray-800 sm:w-[600px]"
          />
          <button
            class="w-16 rounded-r bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white shadow sm:w-fit sm:text-base"
          >
            <span class="hidden sm:inline-flex">{{$t('Search')}}</span>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>
