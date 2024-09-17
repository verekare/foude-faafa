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

const description = {
  sound: ["Offering and providing colorful sounds for visuals, assisting to immerse and dive into the right spirit/feeling by means of sonic dimension."],
  podcast: ["I help with sonic branding, editing, mixing and mastering for podcasts."],
  master: ["I do music production, help with recording, mixing and mastering. In my sound I'm devoted to groove, sound textures and sharp audio solutions."],
  about: [
      "Hi! I'm Oleg, a sound designer, music producer and audio engineer.",
      "I have worked with variety of short-films, animations, podcasts and music artists. My foremost objective is to deliver creative solutions that fit your vision and help the final product to stand out.",
    ]
}

const currentTab = ref('about');

const switchTab = (e) => {    
  //      Changing Index of Current Tab
  const tabId = e.target.classList.value.split(' ').pop();
  const index = tabs.findIndex(tab => tab.name === tabId);
  
  //      Prevent disappearing of active page
  if (index < 0) {
    return;
  }

  setTimeout(() => {
    currentTab.value = tabs[index].name;
    console.log(data.currentTab)
  }, 350)

  //      Side Title goes Up
  const title = e.target.children[0].children[0];
  gsap.to(title, {
    y: '100vh',
    duration: .3,
    ease: "power2.out",
  })

  //      Current Content Dissappearing
  const currIndex = tabs.findIndex(tab => tab.name === currentTab.value);
  const content = document.querySelector('.tabs').children[currIndex].children[0].children;
  gsap.to(content, {
    opacity: 0,
    duration: .35,
    ease: 'circ.out',
  })
}
</script>

<template>
  <div class="tabs">
    <div 
      v-for="(tab, index) in tabs"
      :key="index"
      @click="switchTab"
      :class="['tab', tab.name, tab.name === currentTab ? 'active' : 'inactive']"
    >
        <component 
          :is="tab.name === currentTab ? ActiveTab : SideTab" 
          :title="tab.title"
          :name="tab.name"
          :description="description"
        ></component>
      </div>
  </div>
</template>

<style lang="scss">
@use "/src/styles/globals.scss";
</style>