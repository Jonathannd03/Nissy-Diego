<script setup lang="ts">
const props = defineProps<{
  modelValue: {
    name: string;
    email: string;
    guests: number;
    attending: boolean;
    message: string;
    dietary: string;
  };
  loading: boolean;
}>();

const emit = defineEmits(["update:modelValue", "submit"]);

const form = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const submit = () => emit("submit");
</script>

<template>
  <form @submit.prevent="submit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
          {{ $t("rsvp.name") }} *
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          {{ $t("rsvp.email") }} *
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
        />
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        {{ $t("rsvp.attending") }}
      </label>
      <div class="flex space-x-4">
        <label class="inline-flex items-center">
          <input
            v-model="form.attending"
            type="radio"
            :value="true"
            class="h-4 w-4 text-rose-600 focus:ring-rose-500"
          />
          <span class="ml-2 text-gray-700">{{ $t("rsvp.yes") }}</span>
        </label>
        <label class="inline-flex items-center">
          <input
            v-model="form.attending"
            type="radio"
            :value="false"
            class="h-4 w-4 text-rose-600 focus:ring-rose-500"
          />
          <span class="ml-2 text-gray-700">{{ $t("rsvp.no") }}</span>
        </label>
      </div>
    </div>

    <div v-if="form.attending">
      <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">
        {{ $t("rsvp.guests") }}
      </label>
      <select
        id="guests"
        v-model="form.guests"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
      >
        <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>

    <div v-if="form.attending">
      <label for="dietary" class="block text-sm font-medium text-gray-700 mb-1">
        {{ $t("rsvp.dietary") }}
      </label>
      <textarea
        id="dietary"
        v-model="form.dietary"
        rows="2"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
        :placeholder="$t('rsvp.dietary_placeholder')"
      ></textarea>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
        {{ $t("rsvp.message") }}
      </label>
      <textarea
        id="message"
        v-model="form.message"
        rows="3"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
        :placeholder="$t('rsvp.message_placeholder')"
      ></textarea>
    </div>

    <div class="pt-2">
      <button
        type="submit"
        class="w-full bg-rose-600 text-white py-3 px-6 rounded-md hover:bg-rose-700 transition-colors duration-300 flex items-center justify-center"
        :disabled="loading"
      >
        <span v-if="!loading">{{ $t("rsvp.submit") }}</span>
        <span v-else class="flex items-center">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {{ $t("rsvp.processing") }}
        </span>
      </button>
    </div>
  </form>
</template>
