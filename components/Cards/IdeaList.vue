<script setup lang="ts">
import type { Idea } from '@/types/global'
import {
  minToHour,
  shareInWhatsApp,
  shareInTwitter,
  shareInLinkedIn
} from '@/utils/global'

defineProps<{
  idea: Idea
}>()

const addToFavourite = (id: number) => {
  // get favorite list
  const existing = localStorage.getItem('idea_favourites')

  const existingObj = JSON.parse(existing!)
  existingObj.push(id)
  localStorage.setItem('idea_favourites', JSON.stringify(existingObj))

  // alert user that the favourite has been added.
  console.log(id, existingObj)
}
</script>

<template>
  <NuxtLink :to="{ name: 'app-ideas-id', params: { id: idea.id } }">
    <div
      class="mb-5 flex flex-col overflow-hidden rounded border !font-sans shadow hover:shadow-2xl dark:border-gray-900 dark:bg-gray-800 dark:text-white sm:flex-row"
    >
      <div
        class="flex h-40 w-full flex-none flex-col items-center justify-center space-y-2 bg-indigo-500 text-center uppercase text-white sm:h-auto sm:w-36"
      >
        <div
          class="text-xl font-black"
          :title="`You can also do it with ${idea.technology.join(', ')}`"
        >
          {{ idea.technology[0] }}
        </div>
        <div class="text-sm uppercase">{{ idea.difficulty }}</div>
      </div>
      <div
        class="flex flex-col items-center justify-between gap-5 p-6 sm:flex-row"
      >
        <div class="flex-1 space-y-4">
          <div class="space-y-2">
            <h2 class="text-lg font-semibold">
              {{ idea.title }}
            </h2>
            <p class="text-sm text-gray-700 line-clamp-2 dark:text-gray-500">
              {{ idea.description }}
            </p>
            <div
              class="rounded bg-blue-50 p-5 text-xs font-semibold dark:bg-gray-700"
              v-if="idea.link"
            >
              Link:
              <a
                :href="link"
                class="ml-2 text-blue-500 hover:text-blue-600"
                target="_blank"
                v-for="link in idea.link"
                :key="`link${link}`"
                >{{ link }}</a
              >
            </div>
          </div>

          <div class="flex space-x-4">
            <div
              class="flex items-center space-x-2 rounded border px-4 py-2 text-xs font-medium hover:bg-gray-50 dark:border-gray-700 dark:text-gray-500"
            >
              <IconsTime class="h-4 w-4 text-gray-600" />
              <span>
                {{ $t('aroundHr') + ' ' + minToHour(idea.time_taken) }}</span
              >
            </div>
            <a
              :href="idea.source"
              class="flex items-center space-x-2 rounded border px-4 py-2 text-xs font-medium hover:bg-gray-50 dark:border-gray-700 dark:text-gray-500"
              v-if="idea.source !== ''"
              target="_blank"
            >
              <IconsCode class="h-4 w-4" />
              <span>{{ $t('sourceAvailable') }}</span>
            </a>
          </div>
        </div>

        <div class="space-y-6 text-center">
          <button
            class="flex items-center space-x-1 rounded-full bg-green-600 px-4 py-2 text-xs font-semibold uppercase text-white hover:bg-green-700"
            @click.prevent="addToFavourite(idea.id)"
            type="button"
          >
            <IconsPlus class="h-5 w-5" /> <span>{{ $t('addToTODO') }}</span>
          </button>
          <ul class="flex justify-center space-x-4">
            <li>
              <a :href="shareInWhatsApp(idea)" target="_blank">
                <IconsWhatsaApp
                  class="h-5 w-5 text-gray-600 hover:text-green-600"
                />
              </a>
            </li>
            <li>
              <a :href="shareInTwitter(idea)" target="_blank">
                <IconsTwitter
                  class="h-5 w-5 text-gray-600 hover:text-blue-500"
                />
              </a>
            </li>
            <li>
              <a :href="shareInLinkedIn(idea)" target="_blank">
                <IconsLinkedin
                  class="h-5 w-5 text-gray-600 hover:text-blue-600"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
