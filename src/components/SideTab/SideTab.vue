<script setup>
import gsap from 'gsap/src';

defineProps({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const onEnter = (el, done) => {
  gsap.from(el, {
    y: -500,
    duration: .4,
    ease: "power2.out",
    delay: .7,
    onComplete: done,
  })
}
</script>

<template>
  <section :class="[$style.sideTab, name]">
    <div :class="$style.titleWrap">
        <Transition @enter="onEnter" appear :css="false">
          <h2 :class="$style.sideTabTitle">
            {{ title }}
          </h2>
      </Transition>
      </div>
  </section>
</template>

<style lang="scss" module>
@import './SideTab.module.scss';
</style>