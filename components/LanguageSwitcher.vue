<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

type LocaleObject = { code: string; name: string; flag?: string };

const currentLocale = computed(() => {
  return (locales.value as LocaleObject[]).find((l) => l.code === locale.value);
});

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (l) => l.code !== locale.value
  );
});

const handleLocaleChange = async (newLocale: string) => {
  try {
    await setLocale(newLocale);
    isOpen.value = false;
  } catch (error) {
    console.error("Locale change failed:", error);
  }
};

// Only run on client side
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.value &&
      !dropdownRef.value.contains(event.target as Node)
    ) {
      isOpen.value = false;
    }
  };

  document.addEventListener("click", handleClickOutside);
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
});
</script>

<template>
  <div class="relative">
    <!-- Current Locale Button -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <div class="flex items-center gap-2">
        <span v-if="currentLocale?.flag">{{ currentLocale.flag }}</span>
        <span>{{ currentLocale?.name }}</span>
      </div>
      <svg
        class="w-4 h-4 ml-2 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 z-10 w-full mt-1 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <button
            v-for="loc in availableLocales"
            :key="loc.code"
            @click="handleLocaleChange(loc.code)"
            class="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span v-if="loc.flag" class="mr-2">{{ loc.flag }}</span>
            {{ loc.name }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Mobile responsiveness */
@media (max-width: 640px) {
  .relative {
    width: 100%;
  }

  button {
    padding: 0.75rem 1rem;
  }
}
</style>
