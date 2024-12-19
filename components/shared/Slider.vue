<script setup lang="ts">
export interface SliderProps {
  sliderTimeout?: number
  slides: {
    badgeText: string
    color: `#${string}`
    imageUrl: URL
    text: string
    title: string
  }[]
}

const props = withDefaults(defineProps<SliderProps>(), {
  sliderTimeout: 5000,
})

const currentSlideIndex = ref(0)

function nextSlide() {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % props.slides.length
}

function slideStyle(slideIndex: number) {
  const isActive = currentSlideIndex.value === slideIndex
  const isNext = (slideIndex === currentSlideIndex.value + 1)
    || (currentSlideIndex.value === props.slides.length - 1 && slideIndex === 0)
  return {
    transform: `translateX(${isActive ? '0%' : isNext ? '100%' : '-100%'})`,
    opacity: isActive ? 1 : 0,
    zIndex: isActive ? 10 : isNext ? 5 : 1,
  }
}

onMounted(() => {
  setInterval(nextSlide, props.sliderTimeout)
})
</script>

<template>
  <div class="overflow-hidden">
    <div class="relative aspect-[6/7]">
      <div
        v-for="(slide, slideIndex) in slides"
        :key="slide.title"
        class="absolute top-0 left-0 mt-8 mb-4 aspect-square w-full transition duration-700"
        :style="slideStyle(slideIndex)"
      >
        <img
          class="absolute top-0 left-8 h-full rounded-3xl object-cover aspect-[3/4]"
          :alt="slide.title"
          :src="(slide.imageUrl).toString()"
        >
        <div
          class="absolute -top-6 left-0 rounded-full px-5 py-3 text-sm text-white transition duration-1000"
          :class="{ 'translate-x-10': slideIndex !== currentSlideIndex }"
          :style="{ backgroundColor: slide.color }"
          v-text="slide.badgeText"
        />
        <div
          class="absolute right-0 bottom-6 w-4/5 rounded-3xl px-5 py-3 text-white transition duration-1000"
          :class="{ 'translate-x-6': slideIndex !== currentSlideIndex }"
          :style="{ backgroundColor: slide.color }"
        >
          <div
            class="mb-3 text-lg"
            v-text="slide.title"
          />
          <div
            class="mb-4 text-sm"
            v-text="slide.text"
          />
          <div
            class="mb-2 flex gap-2"
          >
            <div
              v-for="(slideIndicator, indicatorIndex) in slides"
              :key="slideIndicator.title"
              class="h-px grow bg-white/30"
            >
              <div v-if="indicatorIndex === currentSlideIndex" class="h-px bg-white active-indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active-indicator {
  --slider-timeout: v-bind('`${props.sliderTimeout}ms`');
  animation: expand var(--slider-timeout) ease-out;
}
@keyframes expand {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
