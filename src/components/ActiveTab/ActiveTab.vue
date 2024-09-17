<script setup>
import gsap from 'gsap';
import Accordion from '../ui/Accordion/Accordion.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: Object
})

const list = [
  {
    header: "Music and sound design for animations",
    details: [
      "Composing music and music production.",
      "Music sound design and various SFX creation.",
      "Sonic solutions and sound selections that fit right for visuals.",
      "Working with dynamics, mood and character of animation.",
    ],
  },
  {
    header: "Music and sound design for commercial",
    details: [
      "Communication with director and producers, finding right music and audio solutions for client's needs.",
      "Reference selection.",
      "Composing and music production.",
      "Sound design and SFX creation.",
      "Voice-over editing and mixing. Mix and master.",
    ],
  },
  {
    header: "Field recording and music for short video",
    details: [
      "Exploring and recording city sounds in Saigon, Vietnam.",
      "Selection and arrangement recordings into one music collage.",
      "Mixing and mastering."
    ],
  },
  {
    header: "Linear sound design for YouTube videos",
    details: [
      "SFX, Foley, Ambience, Acoustic curtains creation.",
      "Using different approaches and techniques: working with sound and sample libraries, layering, synthesis, recording, sampling/resamplimg. ",
      "Voice-over editing and mixing. Mixing & Mastering to fit youtube’s technical requirements.",
      "Operating on short time."
    ],
  },
  {
    header: "Reverse engineering",
    details: [
      "Sound analysis. Recreating life-like sounds of campfire in the woods by means of synths, processing and layering.",
    ],
  },
  {
    header: "Motion video sound design",
    details: [
      "Creating athmospheric drones and ambienses.",
      "Underlining movement and motion of the video.",
    ],
  },
  {
    header: "Music for mood video",
    details: ["Creating mood and “atmosphere” by means of music and little help of foley/ambience."],
  },
]

let tl = gsap.timeline();

const onBeforeEnterHeader = (el) => {
  tl.set(el, {
    x: -800,
  })
}

const onEnterHeader = (el, done) => {
  tl.to(el, {
    x: 0,
    duration: 1,
    ease: "power3.in",
    onComplete: done,
  })
}

const onBeforeEnterContent = (el) => {
  tl.set(el, {
    opacity: 0,
  })
}

const onEnterContent = (el, done) => {
  tl.to(el, {
    opacity: 1,
    duration: .3,
    delay: .2,
    ease: "power2.in",
    onComplete: done,
  })
}
</script>

<template>
  <div :class="$style.tab">
        <Transition @before-enter="onBeforeEnterHeader" @enter="onEnterHeader" appear :css="false">
          <h1 :class="$style.tab__title">{{ title }}</h1>
        </Transition>
        <Transition @before-enter="onBeforeEnterContent" @enter="onEnterContent" appear :css="false">
          <div :class="$style.tab__content">
            <ul :class="$style.tab__content__description">
              <li
                v-for="(paragraph, index) in description[name]"
                :key="index"
                :class="$style.tab__content__description__text"
              >
                <p>{{ paragraph }}</p>
              </li>
            </ul>
            <!-- <Accordion :list="list"></Accordion> -->
          </div>
        </Transition>
  </div>
</template>

<style lang="scss" module>
@import './ActiveTab.module.scss'
</style>