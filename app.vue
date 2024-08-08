<script setup>
import SideTab from './src/components/SideTab/SideTab.vue';
import ActiveTab from './src/components/ActiveTab/ActiveTab.vue';
const tabs = [
  { title: 'Sound design/production', name: 'sound' },
  { title: 'Podcast editing', name: 'podcast' },
  { title: 'Mix/master', name: 'master' },
  { title: 'About', name: 'about' }
]

const currentTab = ref(0)

const switchTab = (e) => {
  console.log(e.target.firstChild.data);
  switch (e.target.firstChild.data) {
    case 'Sound design/production':
      currentTab.value = 0;
      break;
    case 'Podcast editing':
      currentTab.value = 1;
      break;
    case 'Mix/master':
      currentTab.value = 2;
      break;
    case 'About':
      currentTab.value = 3;
      break;
  }
}
</script>

<template>
  <div class="tabsContainer">
    <transition-group name="tabs" mode="out-in">
      <div v-for="(tab, index) in tabs">
        <component 
          :is="index === currentTab ? ActiveTab : SideTab" 
          :title="tab.title"
          :name="tab.name"
          @click="switchTab"
        ></component>
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss">
@use "/src/styles/globals.scss";
</style>