<script setup lang="ts">
useHead({
  title: 'RSVP - Nissy & Diego',
  meta: [
    { name: 'description', content: 'RSVP for Nissy & Diego\'s wedding' }
  ]
})

const { t } = useI18n()
const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  guests: 1,
  attending: true,
  message: '',
  dietary: ''
})

const submitted = ref(false)
const isLoading = ref(false)

const submitForm = async () => {
  isLoading.value = true
  
  try {
    // In a real app, you would send this to your backend
    console.log('Form submitted:', form)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    submitted.value = true
    useConfetti().burst()
    
    // Reset form after 5 seconds
    setTimeout(() => {
      submitted.value = false
      Object.assign(form, {
        name: '',
        email: '',
        guests: 1,
        attending: true,
        message: '',
        dietary: ''
      })
    }, 5000)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <main class="flex-grow pt-20 pb-12">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div class="p-8">
            <h1 class="text-4xl font-serif text-center mb-6">
              {{ t('rsvp.title') }}
            </h1>
            
            <div class="text-center mb-8">
              <p class="text-gray-600 mb-2">
                {{ t('rsvp.deadline') }}
              </p>
              <p class="text-rose-600 font-medium">
                {{ config.public.rsvpDeadline }}
              </p>
            </div>
            
            <div v-if="submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {{ t('rsvp.success') }}
            </div>
            
            <RsvpForm 
              v-else
              v-model="form"
              :loading="isLoading"
              @submit="submitForm"
            />
          </div>
          
          <div class="bg-gray-50 px-8 py-6">
            <h3 class="text-lg font-medium text-gray-900 mb-4">
              {{ t('rsvp.contact') }}
            </h3>
            <div class="space-y-2">
              <p class="text-gray-700">
                {{ config.public.contact.name }}
              </p>
              <div class="flex flex-col sm:flex-row sm:space-x-4">
                <a 
                  v-for="(phone, index) in config.public.contact.phones" 
                  :key="index"
                  :href="`tel:${phone}`"
                  class="text-rose-600 hover:text-rose-800"
                >
                  {{ phone }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>