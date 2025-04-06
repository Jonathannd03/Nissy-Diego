<script setup lang="ts">
const { t } = useI18n()

// Generate 9 placeholder images
const images = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: '/images/sample.jpg',
  alt: `Wedding photo ${i + 1} of Nissy & Diego`
}))

const selectedImage = ref<number | null>(null)

function openLightbox(id: number) {
  selectedImage.value = id
}
</script>

<template>
  <div>
    <h2 class="text-3xl md:text-4xl font-serif text-center mb-4">
      {{ t('gallery.title') }}
    </h2>
    <p class="text-center text-gray-600 mb-12">
      {{ t('gallery.subtitle') }}
    </p>
    
    <div class="columns-1 md:columns-2 lg:columns-3 gap-4 px-4">
      <div 
        v-for="image in images" 
        :key="image.id"
        class="mb-4 break-inside-avoid relative group cursor-zoom-in"
        @click="openLightbox(image.id)"
      >
        <img 
          :src="image.src" 
          :alt="image.alt"
          class="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      </div>
    </div>

    <GalleryLightbox 
      v-if="selectedImage !== null"
      :images="images"
      :initial-id="selectedImage"
      @close="selectedImage = null"
    />
  </div>
</template>