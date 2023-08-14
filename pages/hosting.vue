<script setup lang="ts">
import { computed, ref } from '@vue/reactivity'
import hostingCategories from '@/services/hostingCategories.json'
import hosting from '@/services/hosting.json'
import { onMounted } from 'vue'
onMounted(() => {
  scrollToTop(0)
})

function scrollToTop(top: number) {
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
}

definePageMeta({
  title: 'Hosting Guides'
})
const selectedCategory = ref('All Hosting')
const searchKey = ref('')
const page = ref(1)
const itemsPerPage = ref(12)

const categoryWithCount = computed(() => {
  return hostingCategories.map((category) => {
    let hostingCount = 0

    if (category.name === 'All Hosting') {
      hostingCount = hosting.length
    } else {
      hostingCount = hosting.filter((res) => {
        return res.category === category.name
      }).length
    }

    const finalName = `${category.name} (${hostingCount})`

    return { id: category.id, key: category.name, name: finalName }
  })
})

const filteredhosting = computed(() => {
  if (selectedCategory.value !== 'All Hosting') {
    let filteredhosting = hosting.filter(
      (res) => res.category === selectedCategory.value
    )
    if (searchKey.value != '') {
      return filteredhosting.filter((res) => {
        return Object.values(res)
          .map((r) => {
            if (typeof r == 'string') return r.includes(searchKey.value)
          })
          .some((x) => x)
      })
    }
    return filteredhosting
  } else {
    if (searchKey.value != '') {
      return hosting.filter((res) => {
        return Object.values(res)
          .map((r) => {
            if (typeof r == 'string') return r.includes(searchKey.value)
          })
          .some((x) => x)
      })
    } else {
      return hosting
    }
  }
})

function paginate() {
  scrollToTop(200)
  let startIndex: number = (page.value - 1) * itemsPerPage.value
  let endIndex: number = startIndex + itemsPerPage.value
  return { startIndex, endIndex }
}
</script>

<template>
  <div class="mt-10 px-2 sm:p-10">
    <div
      class="container mx-auto my-10 rounded bg-white p-5 dark:bg-gray-800 dark:text-white lg:my-20"
    >
      <section class="my-10 space-y-10 text-center">
        <div class="space-y-3">
          <h4 class="text-sm font-medium text-gray-500 sm:text-base">
            {{ $t('hostingPage.subTitle') }}
          </h4>
          <h2 class="text-2xl font-bold sm:text-3xl">
            {{ $t('hostingPage.title') }}
          </h2>
        </div>
        <div class="flex justify-center">
          <input
            v-model="searchKey"
            type="text"
            :placeholder="$t('searchByAnything')"
            class="w-full rounded-l border-2 bg-gray-200 px-4 py-2 text-sm shadow outline-none focus:border-indigo-500 dark:border-gray-500 dark:bg-gray-800 focus:dark:border-indigo-500 sm:w-[600px] sm:text-base"
          />
          <button
            class="w-16 space-x-2 rounded-r bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white shadow sm:w-fit sm:text-base"
          >
            <svg
              class="inline-flex h-6 w-6 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
              ></path>
            </svg>
            <span class="hidden sm:inline-flex">{{ $t('search') }}</span>
          </button>
        </div>
      </section>

      <!-- cards -->
      <div class="mx-auto w-full space-y-10 sm:max-w-6xl sm:p-10">
        <div class="space-x-0 space-y-4 text-center sm:space-x-5 xl:space-y-0">
          <ChipList
            @click="() => (page = 1)"
            v-for="productCategory in categoryWithCount"
            :key="productCategory.id"
            v-model="selectedCategory"
            :title-key="productCategory.key"
            :title="productCategory.name"
          />
        </div>
        <div
          class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <p
            v-if="searchKey != ''"
            class="col-span-1 -mb-28 text-sm italic dark:text-white sm:col-span-2 md:col-span-3 lg:col-span-4"
          >
            Showing
            <span class="font-bold text-orange-500">
              {{ filteredhosting.length }}</span
            >
            resources out of
            <span class="font-bold text-orange-500"> {{ hosting.length }}</span>
          </p>
          <CardsHostingCard
            v-for="hosting in filteredhosting.slice(
              paginate().startIndex,
              paginate().endIndex
            )"
            :key="hosting.id"
            :resource="hosting"
          />
        </div>
        <PaginationPage
          :noOfItems="filteredhosting.length"
          :items-per-page="itemsPerPage"
          :pageNo="page"
          v-model="page"
        />
      </div>
    </div>
  </div>
</template>
