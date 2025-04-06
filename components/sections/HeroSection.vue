<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()

const motionProps = {
  initial: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}
</script>

<template>
  <section class="relative h-screen overflow-hidden">
    <div class="absolute inset-0 bg-black/30 z-10" />
    <img 
      src="/images/sample.jpg" 
      alt="Nissy & Diego"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    
    <div class="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-20 px-4">
      <h1 
        v-motion="motionProps"
        class="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4"
      >
        {{ t('hero.title') }}
      </h1>
      
      <p 
        v-motion="{...motionProps, visible: {...motionProps.visible, transition: {delay: 0.3}}}"
        class="text-xl md:text-2xl text-white mb-8"
      >
        {{ t('hero.date') }}
      </p>
      
      <CountdownTimer 
        v-motion="{...motionProps, visible: {...motionProps.visible, transition: {delay: 0.6}}}"
        :target-date="config.public.weddingDate"
        class="text-white"
      />
    </div>
    
    <ScrollIndicator />
  </section>
</template>