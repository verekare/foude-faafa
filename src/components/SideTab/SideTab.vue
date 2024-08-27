<script setup>
import gsap from 'gsap';

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

const style = useCssModule();

const beforeLeave = (element) => {
}

const leave = (element, done) => {
  gsap.to(element, {
    y: 1000,
    duration: .4,
    onComplete: done,
    ease: "power3.out",
  })
}
</script>

<template>
  <TransitionGroup tag="section" name="side-tab" :class="[style.sideTab, name]">
    <!-- <div > -->
      <Transition tag="div" @before-leave="beforeLeave" @leave="leave" :class="$style.titleWrap">
        <h2 :class="$style.sideTabTitle">
          {{ title }}
        </h2>
      </Transition>
    <!-- </div> -->
  </TransitionGroup>
</template>

<style lang="scss" module>
@import './SideTab.module.scss';
</style>