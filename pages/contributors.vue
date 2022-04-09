<script setup lang="ts">
import { useStore } from '@/stores'
import { Contributor } from '@/types/global'
import { onMounted } from 'vue'
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const store = useStore()

definePageMeta({
  title: 'Contributors'
})

const { data } = await useFetch<Contributor>(
  'https://api.github.com/repos/anburocky3/developer-resources/contributors'
)
</script>

<template>
  <div class="sm:p-10">
    <div
      class="container mx-auto my-10 flex flex-col justify-center p-5 sm:my-20 sm:flex-row sm:p-0"
    >
      <div class="mt-5 w-full">
        <div
          class="space-y-4 rounded-t border-x border-t bg-white p-6 shadow dark:border-none dark:bg-gray-800 dark:text-white sm:shadow-none"
        >
          <div>
            <div class="space-y-2">
              <h4 class="font-semibold">Contributors</h4>
              <p class="text-sm">The real heroes behind the work.</p>
            </div>
            <div class="my-5">
              <a
                :href="contributor.html_url"
                class="mb-5 flex flex-col items-center space-y-4 rounded border p-5 text-center shadow hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 hover:dark:bg-gray-700 sm:flex-row sm:space-y-0 sm:space-x-10 sm:text-left"
                v-for="contributor in data"
                :key="contributor.id"
                target="_blank"
              >
                <div>
                  <img
                    :src="contributor.avatar_url"
                    :alt="contributor.login"
                    class="h-32 w-32 rounded-full dark:border-2 dark:border-green-500"
                  />
                </div>
                <div class="space-y-2 sm:space-y-4">
                  <h4 class="font-semibold text-gray-900 dark:text-white">
                    {{ contributor.login }}
                  </h4>
                  <p
                    class="text-sm text-gray-600 dark:text-gray-400 sm:text-base"
                  >
                    Have contributed {{ contributor.contributions }} times.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Navigate to favourite page or show in alert form -->
        <a
          :href="`${store.app.source}/fork`"
          class="group flex items-center justify-between rounded-b border bg-white p-6 text-sm shadow hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 hover:dark:bg-gray-700"
          target="_blank"
        >
          <span
            class="text-xs font-semibold uppercase tracking-wide text-gray-600 group-hover:dark:text-white"
            >Make your first contribution now.</span
          >
          <div class="flex items-center">
            <IconsFavourite class="h-5 w-5 fill-current text-red-600" />
            <IconsArrowRight
              class="h-5 w-5 fill-current text-gray-600 group-hover:dark:text-white"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
