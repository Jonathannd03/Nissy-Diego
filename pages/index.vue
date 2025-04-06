<script setup lang="ts">
useHead({
  title: 'Nissy & Diego - Willkommen',
  meta: [
    { name: 'description', content: 'Willkommen zur Hochzeitsfeier von Nissy & Diego' }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <main class="flex-grow">
      <WelcomeHero />
      <WelcomeOverview />
      <WelcomeCountdown />
    </main>
    
    <AppFooter />
  </div>
</template>