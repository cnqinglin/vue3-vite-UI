<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav" ref="container">
    <div class="gulu-tabs-nav-item" @click="select(t)"
    :class="{selected : t === selected}"
     v-for="(t,index) in titles" 
     :ref="el => {if(t === selectedItem) selectedItem = el}"
     :key="index">{{t}}</div>
     <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="gulu-tabs-content">
    <component 
      class="gulu-tabs-content-item" 
      v-for="c in defaults" 
      :is="c" 
      :key="c.props.title"
      :class="{selected:c.props.title === selected}" 
    />
  </div>
</div>
</template>

<script lang="ts">
import {computed, onMounted, onUpdated, ref} from 'vue';
import Tab from './Tab.vue'
export default {
    props:{
        selected:{
            type:String
        }
    },
    // setup只会在页面挂载的时候执行一遍，之后不会再执行
  setup(props, context) {

    // 优化 navItems，使用selectedItem
    // const navItems = ref<HTMLDivElement[]>([]);
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const updateWidth = () => {
      // const divs = navItems.value;
        // const result = divs.filter(div => div.classList.contains('selected'))[0]
        // const {width } = result.getBoundingClientRect(); // 获取当前元素宽度
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';  // 给indicator设置宽度
        const {left:left1} = container.value.getBoundingClientRect();  // 获取container左侧的起始位置
        // const {left:left2} = result.getBoundingClientRect();  // 获取当前元距离左侧的起始位置
        const {left:left2} = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;   // 宽度计算
        indicator.value.style.left = left + 'px'  // 给indicaor 设置对应的左侧的其实dian
    }  
    // 每次挂载之后执行
    onMounted(updateWidth);
    onUpdated(updateWidth);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title:String) => {
      context.emit('update:selected',title)
    }
    return {
      defaults,
      titles,
      current,
      select,
      // navItems,
      selectedItem,
      indicator,
      container
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
     &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content { 
    padding: 8px 0;
    &-item {
      display:none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>