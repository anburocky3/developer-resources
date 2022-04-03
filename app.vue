<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const loading = useState('loading', () => true)
onMounted(() => {
  i18n.locale.value = localStorage.getItem('lang')
  loading.value = false
})
</script>

<template>
  <div v-if="!loading">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>
