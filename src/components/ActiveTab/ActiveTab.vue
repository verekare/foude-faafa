<script setup>
import gsap from 'gsap';
import { reactive } from 'vue';
import { Collapse } from 'vue-collapsed';
import content from '~/src/constants/content';

const props = defineProps({
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

console.log(props.name);
const list = reactive(content[props.name]);

function handleAccordion(selectedIndex) {
  list.forEach((_, index) => {
    list[index].isExpanded = index === selectedIndex ? !list[index].isExpanded : false
  })
}

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
    delay: 0,
    ease: "power2.in",
    onComplete: done,
  })
}

function onExpanded(index) {
   indexToScroll = index
   if (!isCollapsing) {
    list.value[7].scrollIntoView({
      behavior: 'smooth',
    })
   }
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

            <div :class="$style.tab__content__works">
              <div :class="[props.name === 'master' ? $style['tab__content__works__list--row'] : $style.tab__content__works__list, $style.tab__content__works__list]">
                <div v-for="(item, index) in list" :key="item.header" :class="$style.tab__content__works__list__item">
                  <button @click="handleAccordion(index)" v-html="item.header" :class="$style.tab__content__works__list__item__header">
                  </button>
                  <Collapse
                    :when="list[index].isExpanded"
                    :class="$style.tab__content__works__list__item__details"
                    @expanded="() => onExpanded(index)"
                  >
                    <li v-for="paragraph in item.details" >
                      <span v-html="paragraph" :class="$style.tab__content__works__list__item__details__text"></span>
                    </li>
                  </Collapse>
                  <div v-if="props.name != 'master' && index != list.length - 1" :class="$style.tab__content__works__list__item__divider"></div>
                </div>
              </div>
            </div>

          </div>
        </Transition>
  </div>
</template>

<style lang="scss" module>
@import './ActiveTab.module.scss'
</style>