<script setup lang="ts">
defineProps<{
  events: Array<{
    time: string
    title: string
    location: string
    description: string
    icon?: string
  }>
}>()
</script>

<template>
  <div class="relative">
    <!-- Timeline line -->
    <div class="absolute left-4 md:left-1/2 h-full w-0.5 bg-rose-200 transform -translate-x-1/2" />
    
    <div class="space-y-12">
      <div 
        v-for="(event, index) in events"
        :key="index"
        class="relative pl-12 md:pl-0"
        :class="{'md:even:pl-12 md:odd:pr-12 md:odd:text-right': index % 2 === 0}"
      >
        <!-- Timeline dot -->
        <div class="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-rose-500 border-4 border-white transform -translate-x-1/2 flex items-center justify-center z-10">
          <Icon v-if="event.icon" :name="event.icon" class="w-4 h-4 text-white" />
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-rose-600 font-medium mb-1">{{ event.time }}</div>
          <h3 class="text-xl font-serif mb-2">{{ event.title }}</h3>
          <div class="text-gray-600 mb-3">{{ event.location }}</div>
          <p class="text-gray-700">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>