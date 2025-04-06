<script setup lang="ts">
const { t } = useI18n()

const timeline = [
  {
    year: 2018,
    title: t('story.how_we_met'),
    image: '/images/sample.jpg'
  },
  {
    year: 2019,
    title: t('story.first_date'),
    image: '/images/sample.jpg'
  },
  {
    year: 2023,
    title: t('story.proposal'),
    image: '/images/sample.jpg'
  },
  {
    year: 2025,
    title: t('story.looking_forward'),
    image: '/images/sample.jpg'
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-serif text-center mb-12">
        {{ t('story.title') }}
      </h2>
      
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 h-full w-0.5 bg-rose-200" />
          
          <div class="space-y-12 pl-12">
            <div 
              v-for="(item, index) in timeline"
              :key="index"
              class="relative"
            >
              <!-- Timeline dot -->
              <div class="absolute -left-12 top-0 w-8 h-8 rounded-full bg-rose-500 border-4 border-white flex items-center justify-center z-10">
                <span class="text-white font-medium">{{ item.year }}</span>
              </div>
              
              <div class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
                <img 
                  :src="item.image" 
                  :alt="`Nissy & Diego ${item.year}`"
                  class="w-full md:w-48 h-48 object-cover rounded-lg"
                />
                <div>
                  <p class="text-gray-700">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>