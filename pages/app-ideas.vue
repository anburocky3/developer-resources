<script setup lang="ts">
import { computed, reactive,onMounted } from 'vue'
import { useStore } from '@/stores'
import ideas from '@/services/ideas.json'
import { hourFormat } from '@/utils/global'

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const store = useStore()

const filters = reactive({
  difficulty: '0',
  challengeDuration: '1',
  showSource: 'no'
})

definePageMeta({
  title: 'Realistic App Ideas'
})

const getDifficultyRank = computed(() => {
  if (filters.difficulty === '0') {
    return 'Easy'
  } else if (filters.difficulty === '1') {
    return 'Medium'
  } else {
    return 'Hard'
  }
})

const getChallengeDuration = computed(() => {
  const duration = parseInt(filters.challengeDuration)
  return hourFormat(duration)
})
</script>

<template>
  <div class="mt-10 p-5 sm:p-10">
    <div
      class="container mx-auto my-10 flex flex-col justify-center gap-10 sm:my-20 sm:flex-row sm:p-0"
    >
      <div class="h-fit w-full sm:w-96">
        <div
          class="space-y-4 rounded-t border-x border-t bg-white p-6 text-white shadow dark:border-gray-900 dark:bg-gray-800"
        >
          <div class="">
            <h4 class="font-semibold">Technologies</h4>
            <div class="my-5 flex flex-wrap">
              <span
                class="mr-3 mb-3 cursor-pointer rounded-full bg-gray-200 px-4 py-2 text-xs font-medium hover:bg-gray-300 dark:bg-gray-900 hover:dark:bg-gray-700"
                v-for="(tech, i) in store.technologies"
                :key="i"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-semibold">
              Difficulty
              <span class="text-sm font-medium">({{ getDifficultyRank }})</span>
            </h4>
            <div>
              <input
                type="range"
                min="0"
                max="2"
                step="1"
                class="w-full"
                v-model="filters.difficulty"
              />
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-semibold">
              Challenge duration
              <span class="text-sm font-medium"
                >({{ getChallengeDuration }})</span
              >
            </h4>
            <div>
              <input
                type="range"
                min="0"
                max="6"
                step="1"
                class="w-full"
                v-model="filters.challengeDuration"
              />
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-semibold">Source Available</h4>
            <div class="space-x-4 text-gray-600 dark:text-white">
              <label class="space-x-2">
                <input
                  type="radio"
                  name="source"
                  value="yes"
                  v-model="filters.showSource"
                />
                <span>Yes</span>
              </label>
              <label class="space-x-2">
                <input
                  type="radio"
                  name="source"
                  value="no"
                  v-model="filters.showSource"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Navigate to favourite page or show in alert form -->
        <a
          href="#"
          class="group flex items-center justify-between rounded-b border bg-white p-6 text-sm shadow hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 hover:dark:bg-gray-700"
          target="_blank"
        >
          <span
            class="text-xs font-semibold uppercase tracking-wide text-gray-600 group-hover:text-white"
            >Check your saved TODO.</span
          >
          <div class="flex items-center">
            <IconsFavourite class="h-5 w-5 fill-current text-red-600" />
            <IconsArrowRight
              class="h-5 w-5 fill-current text-gray-600 group-hover:text-white"
            />
          </div>
        </a>
      </div>
      <div class="flex-1">
        <CardsIdeaList v-for="(idea, i) in ideas" :key="i" :idea="idea" />
      </div>
    </div>
  </div>
</template>
