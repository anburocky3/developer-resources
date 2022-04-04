<script setup lang="ts">
import { Idea } from '@/types/global'
import { minToHour } from '@/utils/global'
defineProps<{
  idea: Idea
}>()

const addToFavourite = (id: number) => {
  // get favorite list
  const existing = localStorage.getItem('idea_favourites')

  const existingObj = JSON.parse(existing)
  existingObj.push(id)
  localStorage.setItem('idea_favourites', JSON.stringify(existingObj))

  // alert user that the favourite has been added.
  console.log(id, existingObj)
}
</script>

<template>
  <a href="">
    <div
      class="mb-5 flex flex-col overflow-hidden rounded border shadow hover:shadow-2xl sm:flex-row"
    >
      <div
        class="flex h-40 w-full flex-col items-center justify-center space-y-2 bg-indigo-500 text-center uppercase text-white sm:w-52"
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
            <p class="text-sm text-gray-700">
              {{ idea.description }}
            </p>
          </div>

          <div class="flex space-x-4">
            <div
              class="flex items-center space-x-2 rounded border px-4 py-2 text-xs hover:bg-gray-50"
            >
              <IconsTime class="h-4 w-4 text-gray-600" />
              <span>Around {{ minToHour(idea.time_taken) }}</span>
            </div>
            <a
              :href="idea.source"
              class="flex items-center space-x-2 rounded border px-4 py-2 text-xs hover:bg-gray-50"
              v-if="idea.source !== ''"
              target="_blank"
            >
              <IconsCode class="h-4 w-4" /> <span>Source available</span>
            </a>
          </div>
        </div>

        <div class="space-y-4 text-center">
          <button
            class="flex items-center space-x-1 rounded-full border bg-green-600 px-4 py-2 text-xs font-semibold uppercase text-white hover:bg-green-700"
            @click.prevent="addToFavourite(idea.id)"
            type="button"
          >
            <IconsPlus class="h-5 w-5" /> <span>Add to Todo</span>
          </button>
          <ul class="flex justify-center space-x-4">
            <li>
              <IconsWhatsaApp
                class="h-5 w-5 text-gray-600 hover:text-green-600"
              />
            </li>
            <li>
              <IconsTwitter class="h-5 w-5 text-gray-600 hover:text-blue-500" />
            </li>
            <li>
              <IconsLinkedin
                class="h-5 w-5 text-gray-600 hover:text-blue-600"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </a>
</template>
