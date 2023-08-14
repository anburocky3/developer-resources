<template>
  <div class="flex w-full justify-between">
    <div class="Prev">
      <button
        v-if="pageNo !== 1"
        @click="$emit('update:modelValue', pageNo - 1)"
        class="NextPrevButton PrevButton rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 sm:w-fit sm:text-base"
      >
        Prev
      </button>
    </div>
    <!-- <div> {{ pageNo }} </div> -->
    <div class="Next">
      <button
        v-if="Math.trunc(noOfItems / 10) > pageNo - 1"
        @click="$emit('update:modelValue', pageNo + 1)"
        class="NextPrevButton NextButton rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 sm:w-fit sm:text-base"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  noOfItems: number
  pageNo: number
}>()
</script>
<style>
.NextPrevButton {
  border-radius: 4px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.NextButton::after {
  content: '»';
  position: absolute;
  opacity: 0;
  right: -20px;
  transition: 0.5s;
}

.PrevButton::before {
  content: '»';
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  position: absolute;
  opacity: 0;
  left: -20px;
  transition: 0.5s;
}

.NextButton:hover {
  padding-right: 24px;
  padding-left: 8px;
}

.NextButton:hover:after {
  opacity: 1;
  right: 10px;
}
.PrevButton:hover {
  padding-left: 24px;
  padding-right: 8px;
}

.PrevButton:hover::before {
  opacity: 1;
  left: 10px;
}
</style>
