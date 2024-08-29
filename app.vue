<script setup>
import SideTab from './src/components/SideTab/SideTab.vue';
import ActiveTab from './src/components/ActiveTab/ActiveTab.vue';
import gsap from 'gsap';
const tabs = [
  { title: 'Sound design/production', name: 'sound' },
  { title: 'Podcast editing', name: 'podcast' },
  { title: 'Mix/master', name: 'master' },
  { title: 'About', name: 'about' }
]

const currentTab = ref('about');

const switchTab = (e) => {
  //      Side Title goes Up
  const title = e.target.children[0].children[0];
  gsap.to(title, {
    y: -400,
    duration: .5,
    ease: "power2.out",
  })

  //      Current Content Dissappearing
  const currIndex = tabs.findIndex(tab => tab.name === currentTab.value);
  const content = document.querySelector('.tabs').children[currIndex].children[0].children;
  gsap.to(content, {
    opacity: 0,
    duration: .7,
    ease: 'circ.out',
  })
  
  //      Changing Index of Current Tab
  const tabId = e.target.classList.value.split(' ').pop();
  const index = tabs.findIndex(tab => tab.name === tabId);
  setTimeout(() => {
    currentTab.value = tabs[index].name;
  }, 950)
}
</script>

<template>
  <div class="tabs">
    <div 
      v-for="(tab, index) in tabs"
      :key="index"
      @click.stop="switchTab"
      :class="['tab', tab.name, tab.name === currentTab ? 'active' : 'inactive']"
    >
        <component 
          :is="tab.name === currentTab ? ActiveTab : SideTab" 
          :title="tab.title"
          :name="tab.name"
        ></component>
      </div>
  </div>
</template>

<style lang="scss">
@use "/src/styles/globals.scss";
</style>