<script setup lang="ts">
import { computed, reactive, onMounted } from 'vue'
import { useStore } from '@/stores'
import ideas from '@/services/ideas.json'
import { hourFormat } from '@/utils/global'

const Ideas = useState('Ideas', () => ideas)
const techFilters = useState('techFilters', () => [])

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const store = useStore()

const filters = reactive({
  difficulty: '1',
  challengeDuration: '0',
  showSource: '-'
})

definePageMeta({
  title: 'Realistic App Ideas'
})

const getDifficultyRank = computed(() => {
  filterIdeas()
  if (filters.difficulty === '0') {
    return 'All'
  } else if (filters.difficulty === '1') {
    return 'Easy'
  } else if (filters.difficulty === '2') {
    return 'Medium'
  } else if (filters.difficulty === '3') {
    return 'Hard'
  }
})

const getChallengeDuration = computed(() => {
  if (filters.challengeDuration !== '0') {
    const duration = parseInt(filters.challengeDuration)
    return hourFormat(duration)
  } else {
    return 'All'
  }
})

const filterByTech = (type: string, val: string) => {
  if (type === 'tech') {
    if (techFilters.value.includes(val)) {
      const index = techFilters.value.indexOf(val)
      if (index > -1) {
        techFilters.value.splice(index, 1)
      }
    } else {
      techFilters.value.push(val)
    }
    filterIdeas()
  }
}

const filterIdeas = () => {
  let techRes = []
  let diffRes = []
  let durRes = []
  let srcRes = []
  if (techFilters.value.length > 0) {
    techRes = ideas.filter((i) => {
      return (
        i.technology.filter((t) => {
          return techFilters.value.includes(t)
        }).length > 0
      )
    })
  } else {
    techRes = ideas
  }
  if (filters.difficulty !== '') {
    if (filters.difficulty === '1') {
      diffRes = ideas.filter((i) => {
        return i.difficulty === 'easy'
      })
    }
    if (filters.difficulty === '2') {
      diffRes = ideas.filter((i) => {
        return i.difficulty === 'medium'
      })
    }
    if (filters.difficulty === '3') {
      diffRes = ideas.filter((i) => {
        return i.difficulty === 'hard'
      })
    }
    if (filters.difficulty === '0') {
      diffRes = ideas
    }
  }
  if (filters.challengeDuration !== '0') {
    durRes = ideas.filter((i) => {
      return i.time_taken === parseInt(filters.challengeDuration) * 60
    })
  } else {
    durRes = ideas
  }
  if (filters.showSource !== '-') {
    if (filters.showSource === 'no') {
      srcRes = ideas.filter((i) => {
        return i.source === ''
      })
    } else {
      srcRes = ideas.filter((i) => {
        return i.source !== ''
      })
    }
  } else {
    srcRes = ideas
  }
  let res = techRes
    .filter((e) => diffRes.includes(e))
    .filter((e) => durRes.includes(e))
    .filter((e) => srcRes.includes(e))
  Ideas.value = res
}
</script>

<template>
  <div class="mt-10 p-5 sm:p-10">
    <div
      class="container mx-auto my-10 flex flex-col justify-center gap-10 sm:my-20 sm:flex-row sm:p-0"
    >
      <div class="h-fit w-full sm:w-96">
        <div
          class="space-y-4 rounded-t border-x border-t bg-white p-6 shadow dark:border-gray-900 dark:bg-gray-800 dark:text-white"
        >
          <div class="">
            <h4 class="font-semibold">{{ $t('technologies') }}</h4>
            <div class="my-5 flex flex-wrap">
              <span
                class="mr-3 mb-3 cursor-pointer rounded-full px-4 py-2 !font-sans text-xs font-medium"
                :class="
                  techFilters.includes(tech)
                    ? 'bg-orange-600 text-white dark:bg-orange-600'
                    : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 hover:dark:bg-gray-700'
                "
                v-for="(tech, i) in store.technologies"
                :key="i"
                @click="filterByTech('tech', tech)"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-semibold">
              {{ $t('difficulty') }}
              <span class="!font-sans text-sm font-medium"
                >({{ getDifficultyRank }})</span
              >
            </h4>
            <div>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                class="w-full"
                v-model="filters.difficulty"
              />
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-semibold">
              {{ $t('challengeDuration') }}
              <span class="!font-sans text-sm font-medium"
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
            <h4 class="font-semibold">{{ $t('sourceAvailable') }}</h4>
            <div class="space-x-4 text-gray-600 dark:text-white">
              <label class="space-x-2">
                <input
                  type="radio"
                  name="source"
                  value="-"
                  v-model="filters.showSource"
                />
                <span>All</span>
              </label>
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
          class="group flex items-center justify-between rounded-b border bg-white p-6 text-sm shadow hover:bg-indigo-600 dark:border-gray-900 dark:bg-gray-800 hover:dark:bg-gray-700"
          target="_blank"
        >
          <span
            class="text-xs font-semibold uppercase tracking-wide text-gray-600 group-hover:text-white"
            >Check your saved TODO.</span
          >
          <div class="flex items-center">
            <IconsFavourite
              class="h-5 w-5 fill-current text-red-600 group-hover:text-white dark:group-hover:text-red-600"
            />
            <IconsArrowRight
              class="h-5 w-5 fill-current text-gray-600 group-hover:text-white"
            />
          </div>
        </a>
      </div>
      <div class="flex-1">
        <CardsIdeaList v-for="(idea, i) in Ideas" :key="i" :idea="idea" />
      </div>
    </div>
  </div>
</template>
