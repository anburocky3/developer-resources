<script setup lang="ts">
defineProps<{
  titleKey: string
  title: string
  modelValue: string
}>()
</script>

<template>
  <button
    class="w-full rounded border bg-gray-100 bg-transparent px-4 py-2 !font-sans text-xs font-semibold uppercase text-gray-500 hover:bg-orange-500 hover:text-white dark:border-gray-700 sm:w-fit"
    :class="{
      'bg-orange-500 !text-white dark:border-orange-500':
        modelValue === titleKey
    }"
    @click="$emit('update:modelValue', titleKey)"
  >
    {{ title }}
  </button>
</template>
