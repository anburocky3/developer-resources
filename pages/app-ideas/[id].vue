<script setup lang="ts">
import ideas from '@/services/ideas.json'
import {
  minToHour,
  shareInWhatsApp,
  shareInTwitter,
  shareInLinkedIn
} from '@/utils/global'
import { type Idea } from '~~/types/global'

const route = useRoute()

// find idea by route id
const idea = <Idea>ideas.find((idea) => idea.id.toString() === route.params.id)

useHead({
  title: `${idea.technology[0]} - ${idea.title}`
})
</script>

<template>
  <div class="mt-10">
    <div
      class="flex items-center justify-center bg-indigo-500 py-24 !font-sans"
    >
      <div
        class="flex flex-col items-center justify-center space-y-10 text-white sm:flex-row sm:space-y-0 sm:space-x-10"
      >
        <div
          class="flex h-36 w-36 items-center justify-center rounded bg-indigo-600 text-xl font-semibold shadow-xl"
          :title="idea.technology.join(', ')"
        >
          {{ idea.technology[0] }}
        </div>
        <div class="max-w-4xl space-y-2 p-5 text-center sm:p-0 sm:text-left">
          <h1 class="font-semibold sm:text-xl">{{ idea.title }}</h1>
          <p class="text-sm text-gray-200 sm:text-base">
            {{ idea.description }}
          </p>
          <div
            class="rounded bg-indigo-900 p-5 text-xs font-semibold dark:bg-gray-700"
            v-if="idea.link"
          >
            Link:
            <a
              :href="idea.link"
              class="ml-2 text-blue-500 hover:text-blue-600"
              target="_blank"
              >{{ idea.link }}</a
            >
          </div>
          <div
            class="!mt-5 flex flex-col items-center space-x-5 space-y-5 sm:flex-row sm:space-y-0"
          >
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
                  <IconsTwitter
                    class="text-whtie h-5 w-5 hover:text-blue-500"
                  />
                </a>
              </li>
              <li>
                <a :href="shareInLinkedIn(idea)" target="_blank">
                  <IconsLinkedin
                    class="text-whtie h-5 w-5 hover:text-blue-600"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- People who have forked this. -->
    <div
      class="mx-2 my-10 flex max-w-6xl flex-col items-center justify-between space-y-5 rounded bg-white p-10 shadow dark:bg-gray-800 sm:my-10 sm:mx-auto sm:flex-row sm:space-y-0"
    >
      <h2 class="font-semibold text-gray-800 dark:text-white sm:text-lg">
        {{ $t('shareWithFriends') }}
      </h2>
      <a
        :href="shareInTwitter(idea)"
        class="rounded bg-green-500 px-4 py-2 text-xs font-semibold uppercase text-white hover:bg-green-600 sm:text-sm"
        target="_blank"
        ><IconsShare /> Share it</a
      >
    </div>
  </div>
</template>
