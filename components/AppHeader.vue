<script setup lang="ts">
const mobileMenuOpen = ref(false)
const navItems = [
  { path: '/', name: 'Home' },
  { path: '/story', name: 'Our Story' },
  { path: '/details', name: 'Details' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/rsvp', name: 'RSVP' }
]

const isActive = (path: string) => {
  return useRoute().path === path
}

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>

<template>
  <header class="fixed w-full z-50 bg-white/90 backdrop-blur shadow-sm">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-serif text-rose-600">N&D</NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          class="px-3 py-2 text-gray-700 hover:text-rose-500 transition-colors"
          :class="{ 'text-rose-600 font-medium': isActive(item.path) }"
        >
          {{ item.name }}
        </NuxtLink>
        <LanguageSwitcher />
      </nav>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden text-gray-700 focus:outline-none"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" 
          />
        </svg>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden bg-white shadow-lg"
      >
        <div class="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="px-3 py-2 text-gray-700 hover:text-rose-500"
            :class="{ 'text-rose-600 font-medium': isActive(item.path) }"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
          <LanguageSwitcher class="mt-2" />
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
  overflow: hidden;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>