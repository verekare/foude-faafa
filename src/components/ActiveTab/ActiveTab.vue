<script setup>
import gsap from 'gsap';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

let tl = gsap.timeline();

const onBeforeEnterHeader = (el) => {
  tl.set(el, {
    x: -800,
  })
}

const onEnterHeader = (el, done) => {
  tl.to(el, {
    x: 0,
    duration: 1.2,
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
    duration: .7,
    delay: .2,
    ease: "power2.in",
    onComplete: done,
  })
}
</script>

<template>
  <div :class="[$style.activeTab]">
        <Transition @before-enter="onBeforeEnterHeader" @enter="onEnterHeader" appear :css="false">
          <h1 class="tabTitle">{{ props.title }}</h1>
        </Transition>
        <Transition @before-enter="onBeforeEnterContent" @enter="onEnterContent" appear :css="false">
          <p class="tabDescription">Offering and providing colorful sounds for visuals, 
          assisting to immerse and dive into the right 
          spirit/feeling by means of sonic dimension.</p>
        </Transition>
  </div>
</template>

<style lang="scss" module>
@import './ActiveTab.module.scss'
</style>