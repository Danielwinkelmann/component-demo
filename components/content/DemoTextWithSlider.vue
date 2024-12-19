<script setup lang="ts">
import type { SliderProps } from '~/components/shared/Slider.vue'

export type DemoTextWithSliderProps = {
  headline: string
  paragraph: string
} & SliderProps

defineProps<DemoTextWithSliderProps >()

function sanitizeHtml(html: string) {
  // dangerously sanitize HTML
  return html
}
</script>

<template>
  <div
    class="m-8 flex h-fit w-4/5 flex-col-reverse gap-4 rounded-3xl bg-white px-8 py-10 md:flex-row"
  >
    <div
      class="w-full p-4 md:w-1/2 flex flex-col justify-center"
    >
      <div class="prose">
        <h2
          v-text="headline"
        />
        <p
          v-html="sanitizeHtml(paragraph)"
        />
      </div>
    </div>
    <div class="grow p-4 flex flex-col justify-center">
      <shared-slider :slider-timeout="sliderTimeout" :slides="slides" />
    </div>
  </div>
</template>
