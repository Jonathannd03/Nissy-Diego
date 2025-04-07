<script setup lang="ts">
const { t, locale, locales } = useI18n();
</script>

<template>
  <section
    class="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
  >
    <img
      src="/images/sample.jpg"
      alt="Nissy & Diego"
      class="absolute inset-0 w-full h-full object-cover opacity-70"
    />

    <div class="relative z-10 text-center px-6">
      <h1 class="text-4xl md:text-6xl font-serif text-white mb-6">
        {{ t("welcome.title") }}
      </h1>
      <p class="text-xl md:text-2xl text-white mb-8">
        {{ t("welcome.date_location") }}
      </p>
      <NuxtLink
        to="/details"
        class="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-md transition-colors"
      >
        {{ t("welcome.cta") }}
      </NuxtLink>
    </div>
  </section>
</template>
