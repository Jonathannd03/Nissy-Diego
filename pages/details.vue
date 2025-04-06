<script setup lang="ts">
useHead({
  title: 'Wedding Details - Nissy & Diego',
  meta: [
    { name: 'description', content: 'Details about Nissy & Diego\'s wedding ceremony and reception' }
  ]
})

const { t } = useI18n()

// Make events reactive
const events = computed(() => [
  {
    time: '14:00',
    title: t('details.ceremony.title'),
    location: t('details.ceremony.location'),
    description: t('details.ceremony.description'),
    icon: 'heroicons:heart'
  },
  {
    time: '20:00',
    title: t('details.reception.title'),
    location: t('details.reception.location'),
    description: t('details.reception.description'),
    icon: 'heroicons:glass-chevron-down'
  }
])

const maps = {
  ceremony: 'https://maps.google.com/maps?q=Kirche+Le+Rocher,+Veldener+Str.+45,+52349+Düren',
  reception: 'https://maps.google.com/maps?q=Saal+Grand+Palace,+Steffenrott+10,+52428+Jülich'
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <main class="flex-grow pt-20 pb-12">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-serif text-center mb-12">
          {{ t('details.title') }}
        </h1>
        
        <div class="max-w-4xl mx-auto">
          <Timeline :events="events" />
          
          <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <MapCard 
              :title="t('details.ceremony.title')"
              :address="t('details.ceremony.location')"
              :map-link="maps.ceremony"
              class="hover:shadow-lg transition-shadow"
            />
            <MapCard 
              :title="t('details.reception.title')"
              :address="t('details.reception.location')"
              :map-link="maps.reception"
              class="hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>