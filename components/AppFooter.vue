<script setup lang="ts">
const { t } = useI18n()

const navItems = [
  { id: 'home', name: t('nav.home') },
  { id: 'story', name: t('nav.story') },
  { id: 'details', name: t('nav.details') },
  { id: 'gallery', name: t('nav.gallery') },
  { id: 'rsvp', name: t('nav.rsvp') }
]

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0 text-center md:text-left">
          <h3 class="text-2xl font-serif mb-2">Nissy & Diego</h3>
          <p class="text-gray-400">{{ t('footer.quote') }}</p>
          <p class="text-gray-500 text-sm mt-1">{{ t('footer.author') }}</p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            v-for="item in navItems" 
            :key="item.id" 
            href="#" 
            @click.prevent="scrollTo(item.id)"
            class="text-gray-300 hover:text-white transition-colors px-2 py-1"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {{ new Date().getFullYear() }} Dev. Jonathan Ndinga. {{ t('common.all_rights_reserved') }}</p>
      </div>
    </div>
  </footer>
</template>