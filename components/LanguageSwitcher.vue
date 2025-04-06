<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value as {code: string, name: string}[]).filter(l => l.code !== locale.value)
})
</script>

<template>
  <div class="flex items-center space-x-2">
    <button
      v-for="loc in availableLocales"
      :key="loc.code"
      @click="$i18n.setLocale(loc.code)"
      class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
    >
      {{ loc.name }}
    </button>
  </div>
</template>