<script setup>
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
</script>

<template>
  <TransitionGroup 
    name="active-tab"
    tag="div" 
    :class="[style.activeTab, name]"
  >
    <h1 class="tabTitle">{{ title }}</h1>
    <p class="tabDescription">Offering and providing colorful sounds for visuals, 
assisting to immerse and dive into the right 
spirit/feeling by means of sonic dimension.</p>
  </TransitionGroup>
</template>

<style lang="scss" module>
@import './ActiveTab.module.scss'
</style>