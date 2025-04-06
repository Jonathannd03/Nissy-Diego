<script setup lang="ts">
const { t } = useI18n()

const cards = [
  {
    title: t('welcome.our_story'),
    description: t('welcome.our_story_desc'),
    link: '/story',
    image: '/sample.jpg'
  },
  {
    title: t('welcome.details'),
    description: t('welcome.details_desc'),
    link: '/details',
    image: '/sample.jpg'
  },
  {
    title: t('welcome.rsvp'),
    description: t('welcome.rsvp_desc'),
    link: '/rsvp',
    image: '/sample.jpg'
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-serif text-center mb-12">
        {{ t('welcome.discover') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(card, index) in cards"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img 
            :src="card.image" 
            :alt="card.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-serif mb-2">{{ card.title }}</h3>
            <p class="text-gray-600 mb-4">{{ card.description }}</p>
            <NuxtLink 
              :to="card.link"
              class="text-rose-600 hover:text-rose-800 font-medium"
            >
              {{ t('welcome.learn_more') }} →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>