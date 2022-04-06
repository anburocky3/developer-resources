<script setup lang="ts">
const props = defineProps({
  error: Object
})

useHead({
  title: `#${props.error.statusCode} - ${props.error.statusMessage}`
})
</script>

<template>
  <div
    class="flex min-h-screen flex-col justify-center space-y-10 p-10 dark:bg-gray-800 sm:flex-row sm:items-center sm:justify-center sm:space-y-0"
  >
    <TheHeader />
    <img
      src="/img/app-content.webp"
      alt="App Mockup"
      class="mr-10 w-32 sm:w-52"
    />
    <div class="max-w-md space-y-5">
      <div v-if="error.statusCode === '404'" class="space-y-4">
        <div class="space-y-5 text-gray-800">
          <span
            class="rounded bg-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white dark:bg-gray-200 dark:text-black sm:text-base"
            >#404</span
          >
          <h2
            class="bg-gradient-to-r from-indigo-500 to-red-500 bg-clip-text text-2xl font-black uppercase text-transparent sm:text-3xl"
          >
            Page Not Found
          </h2>
          <span
            class="text-xs font-bold uppercase dark:text-gray-400 sm:text-sm"
            >oh uh! You are lost,</span
          >
        </div>
        <p class="text-sm leading-6 tracking-wide text-gray-500 sm:text-base">
          It looks like the page you are looking is not found. Anyhow, we got
          it, you can
          <NuxtLink
            :to="{ name: 'index' }"
            class="text-orange-500 hover:text-orange-600"
            >redirect to home</NuxtLink
          >.
        </p>
      </div>
      <div v-else-if="error.statusCode === '500'" class="space-y-4">
        <div class="space-y-5 text-gray-800">
          <span
            class="rounded bg-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white dark:bg-gray-200 dark:text-black sm:text-base"
            >#500</span
          >
          <h2
            class="bg-gradient-to-r from-indigo-500 to-red-500 bg-clip-text text-2xl font-black uppercase text-transparent sm:text-3xl"
          >
            Server Error
          </h2>
          <span
            class="text-xs font-bold uppercase dark:text-gray-400 sm:text-sm"
            >oh uh! It is our Fault,</span
          >
        </div>
        <p class="text-sm leading-6 tracking-wide text-gray-500 sm:text-base">
          Something is wrong and we think, we are the culprit. So notify the
          site administrator to resolve this asap. You can
          <NuxtLink
            :to="{ name: 'index' }"
            class="text-orange-500 hover:text-orange-600"
            >redirect to home</NuxtLink
          >
          here.
        </p>
      </div>
      <div v-else class="space-y-4">
        <div class="space-y-5 text-gray-800">
          <span
            class="rounded bg-gray-800 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white dark:bg-gray-200 dark:text-black sm:text-base"
            >#UNKNOWN</span
          >
          <h2
            class="bg-gradient-to-r from-indigo-500 to-red-500 bg-clip-text text-2xl font-black uppercase text-transparent sm:text-3xl"
          >
            Something went Wrong
          </h2>
          <span
            class="text-xs font-bold uppercase dark:text-gray-400 sm:text-sm"
            >oh No! We are confused!</span
          >
        </div>
        <p class="text-sm leading-6 tracking-wide text-gray-500 sm:text-base">
          We got confused, if you are seeing this page frequentely contact site
          administrator or you can
          <NuxtLink
            :to="{ name: 'index' }"
            class="text-orange-500 hover:text-orange-600"
            >redirect to home</NuxtLink
          >
          here.
        </p>
      </div>

      <div>
        <NuxtLink
          :to="{ name: 'index' }"
          class="mt-10 rounded bg-indigo-500 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-600 sm:text-sm"
          ><IconsHome class="inline-flex h-5 w-5 pr-1" /> Go Home</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
