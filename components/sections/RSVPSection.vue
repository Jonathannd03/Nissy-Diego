<script setup lang="ts">
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

const submitForm = async () => {
  // In a real app, you would send this to your backend
  console.log('Form submitted:', form)
  
  // Show confetti and success message
  useConfetti().burst()
  submitted.value = true
  
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
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-4">
    <div class="text-center mb-8">
      <p class="text-gray-600 mb-2">{{ t('rsvp.deadline') }}</p>
      <p class="text-rose-600 font-medium">{{ config.public.rsvpDeadline }}</p>
    </div>
    
    <div v-if="submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
      {{ t('rsvp.success') }}
    </div>
    
    <form v-else @submit.prevent="submitForm" class="space-y-6">
      <!-- Form fields same as before -->
    </form>
    
    <div class="mt-8 pt-8 border-t border-gray-200">
      <h3 class="text-lg font-medium text-gray-900 mb-4">{{ t('rsvp.contact') }}</h3>
      <div class="space-y-2">
        <p class="text-gray-700">{{ config.public.contact.name }}</p>
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
</template>