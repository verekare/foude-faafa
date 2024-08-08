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
  <section :class="[style.sideTab, name]">
    <div :class="$style.titleWrap">
      <h2 :class="$style.sideTabTitle">
        {{ title }}
      </h2>
    </div>
  </section>
</template>

<style lang="scss" module>
@import './SideTab.module.scss';
</style>