<script setup lang="ts">
const hearts = ref<Array<{id: number, left: string, delay: string}>>([])

onMounted(() => {
  // Create hearts periodically
  setInterval(() => {
    if (hearts.value.length > 15) return
    
    const id = Date.now()
    const left = `${Math.random() * 100}%`
    const delay = `${Math.random() * 2}s`
    
    hearts.value.push({ id, left, delay })
    
    // Remove heart after animation
    setTimeout(() => {
      hearts.value = hearts.value.filter(h => h.id !== id)
    }, 4000)
  }, 800)
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div 
      v-for="heart in hearts"
      :key="heart.id"
      class="heart text-rose-400 text-2xl"
      :style="{left: heart.left, 'animation-delay': heart.delay}"
    >
      ♥
    </div>
  </div>
</template>