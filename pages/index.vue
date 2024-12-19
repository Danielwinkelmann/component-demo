<script setup lang="ts">
import type { DemoComponentProps } from '~/components/DemoComponent.vue'

const demoData: DemoComponentProps = {
  headline: 'Hello World',
  paragraph: 'Excepteur laboris ut dolor sunt cillum ea tempor. Proident cillum anim id culpa et culpa labore dolor nostrud irure do veniam consectetur sint eiusmod. Amet anim nisi nostrud excepteur pariatur aliqua. Incididunt aliqua ipsum enim consequat proident. Enim voluptate aliqua cupidatat exercitation elit consequat veniam ut. Enim mollit in magna excepteur reprehenderit commodo aute cupidatat aliquip ad fugiat ullamco amet. Deserunt qui elit dolore magna qui.',
  sliderTimeout: 5000,
  slides: [
    {
      badgeText: 'Et laborum eiusmod',
      color: '#428fa7',
      imageUrl: new URL('https://picsum.photos/seed/1000/600/800'),
      text: 'Et sunt do pariatur adipisicing aliquip nulla voluptate ullamco labore occaecat non ullamco sit sunt elit.',
      title: 'Id mollit ex',
    },
    {
      badgeText: 'Aliquip commodo officia',
      color: '#4262a7',
      imageUrl: new URL('https://picsum.photos/id/1001/600/900'),
      text: 'Dolore anim nisi voluptate nostrud aliqua aliquip laboris.',
      title: 'Magna veniam esse',
    },
    {
      badgeText: 'Dolor incididunt laboris',
      color: '#42a79b',
      imageUrl: new URL('https://picsum.photos/id/1002/700/800'),
      text: 'Incididunt eu aute ad voluptate cupidatat dolore incididunt nostrud occaecat.',
      title: 'Id nisi laboris',
    },
  ],
}
</script>

<template>
  <div class=" flex justify-center items-start bg-gray-100">
    <div class="container min-h-screen flex justify-center items-start">
      <demo-component
        :headline="demoData.headline"
        :paragraph="demoData.paragraph"
        :slides="demoData.slides"
        :slider-timeout="demoData.sliderTimeout"
      />
    </div>
  </div>
</template>
