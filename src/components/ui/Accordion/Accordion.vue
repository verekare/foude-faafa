<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
const props = defineProps({
  list: Array,
})

const openedItems = ref(props.list.map(() => false));
const handleClick = (index) => {
  openedItems.value[index] = !openedItems.value[index];
  console.log(openedItems.value[index]);
}
</script>

<template>
  <div :class="$style.accordion">
    <div 
      :class="$style.accordion__item" 
      v-for="(item, index) in props.list" 
      :key="index"
      @click="() => handleClick(index)"
    >
      <!--    Header     -->
      <div :class="$style.accordion__item__header">{{ item.header }}</div>

      <!--    Details    -->
      <ul :class="[$style.accordion__item__details, openedItems[index] && $style['accordion__item__details-opened']]">
        <li v-for="paragraph in item.details" >
          <p :class="$style.accordion__item__details__text">{{ paragraph }}</p>
        </li>
      </ul>
      <div v-if="index != props.list.length - 1" :class="$style.accordion__item__divider"></div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import './Accordion.module.scss'
</style>