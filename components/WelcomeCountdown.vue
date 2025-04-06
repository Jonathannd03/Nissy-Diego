<script setup lang="ts">
const { t } = useI18n()
const targetDate = new Date('2025-08-09T14:00:00')

const { days, hours, minutes, seconds } = useCountdown(targetDate)
</script>

<template>
  <section class="py-20 bg-rose-50">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-serif mb-6">
        {{ t('welcome.countdown_title') }}
      </h2>
      
      <div class="flex justify-center gap-4">
        <div class="bg-white p-4 rounded-lg shadow-sm w-24">
          <div class="text-3xl font-bold text-rose-600">{{ days }}</div>
          <div class="text-gray-600">{{ t('welcome.days') }}</div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-sm w-24">
          <div class="text-3xl font-bold text-rose-600">{{ hours }}</div>
          <div class="text-gray-600">{{ t('welcome.hours') }}</div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-sm w-24">
          <div class="text-3xl font-bold text-rose-600">{{ minutes }}</div>
          <div class="text-gray-600">{{ t('welcome.minutes') }}</div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-sm w-24">
          <div class="text-3xl font-bold text-rose-600">{{ seconds }}</div>
          <div class="text-gray-600">{{ t('welcome.seconds') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>