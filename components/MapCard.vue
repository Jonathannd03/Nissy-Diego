<script setup lang="ts">
defineProps<{
  title: string
  address: string
  mapLink: string
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
    <div class="p-6">
      <h3 class="text-xl font-serif mb-2">{{ title }}</h3>
      <address class="text-gray-600 not-italic mb-4">
        {{ address }}
      </address>
      <a 
        :href="mapLink" 
        target="_blank"
        class="inline-flex items-center text-rose-600 hover:text-rose-800"
      >
        <Icon name="heroicons:map-pin" class="mr-2" />
        {{ $t('common.view_map') }}
      </a>
    </div>
    <div class="bg-gray-100 h-48">
      <!-- Map placeholder - replace with embedded map if needed -->
      <div class="w-full h-full flex items-center justify-center text-gray-400">
        <Icon name="heroicons:map" class="w-12 h-12" />
      </div>
    </div>
  </div>
</template>