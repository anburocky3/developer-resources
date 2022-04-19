<script setup lang="ts">
import ideas from '@/services/ideas.json'
import {
  minToHour,
  shareInWhatsApp,
  shareInTwitter,
  shareInLinkedIn
} from '@/utils/global'

const route = useRoute()

// find idea by route id
const idea = ideas.find((idea) => idea.id.toString() === route.params.id)

useHead({
  title: `${idea.technology[0]} - ${idea.title}`
})
</script>

<template>
  <div class="flex h-96 items-center justify-center bg-indigo-500 text-white">
    <div class="flex items-center justify-between space-x-10">
      <div
        class="flex h-36 w-36 items-center justify-center rounded bg-indigo-600 text-xl font-semibold shadow-xl"
        :title="idea.technology.join(', ')"
      >
        {{ idea.technology[0] }}
      </div>
      <div class="max-w-4xl space-y-2">
        <h1 class="text-xl font-semibold">{{ idea.title }}</h1>
        <p class="text-gray-200">{{ idea.description }}</p>
        <div class="!mt-5 flex items-center space-x-5">
          <span
            class="rounded border border-gray-400 px-4 py-2 text-xs uppercase"
            >{{ idea.difficulty }}</span
          >
          <div
            class="flex items-center space-x-2 rounded border border-gray-400 px-4 py-2 text-xs font-medium"
          >
            <IconsTime class="h-4 w-4" />
            <span>Around {{ minToHour(idea.time_taken) }}</span>
          </div>
          <a
            :href="idea.source"
            class="flex items-center space-x-2 rounded border px-4 py-2 text-xs font-medium hover:bg-gray-50 hover:text-green-500"
            v-if="idea.source !== ''"
            target="_blank"
          >
            <IconsCode class="h-4 w-4" /> <span>Source available</span>
          </a>
          <ul class="flex justify-center space-x-4">
            <li>
              <a :href="shareInWhatsApp(idea)" target="_blank">
                <IconsWhatsaApp
                  class="text-whtie h-5 w-5 hover:text-green-600"
                />
              </a>
            </li>
            <li>
              <a :href="shareInTwitter(idea)" target="_blank">
                <IconsTwitter class="text-whtie h-5 w-5 hover:text-blue-500" />
              </a>
            </li>
            <li>
              <a :href="shareInLinkedIn(idea)" target="_blank">
                <IconsLinkedin class="text-whtie h-5 w-5 hover:text-blue-600" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
