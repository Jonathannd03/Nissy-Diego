<script setup lang="ts">
useHead({
  title: "Photo Gallery - Nissy & Diego",
  meta: [
    {
      name: "description",
      content: "Gallery of Nissy & Diego's special moments",
    },
  ],
});

const { t } = useI18n();

// Generate placeholder images (replace with real ones later)
const images = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: "/images/sample.jpg",
  alt: `Wedding moment ${i + 1}`,
  category: i % 3 === 0 ? "couple" : i % 3 === 1 ? "ceremony" : "reception",
}));

const activeCategory = ref("all");
const categories = [
  { id: "all", name: t("gallery.all") },
  { id: "couple", name: t("gallery.couple") },
  { id: "ceremony", name: t("gallery.ceremony") },
  { id: "reception", name: t("gallery.reception") },
];

const filteredImages = computed(() => {
  return activeCategory.value === "all"
    ? images
    : images.filter((img) => img.category === activeCategory.value);
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow pt-20 pb-12">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-serif text-center mb-6">
          {{ t("gallery.title") }}
        </h1>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ t("gallery.subtitle") }}
        </p>

        <div class="flex justify-center mb-8 overflow-x-auto">
          <div class="flex space-x-2">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.id"
              class="px-4 py-2 rounded-full whitespace-nowrap"
              :class="{
                'bg-rose-600 text-white': activeCategory === category.id,
                'bg-gray-100 hover:bg-gray-200': activeCategory !== category.id,
              }"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <MasonryGallery :images="filteredImages" />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
