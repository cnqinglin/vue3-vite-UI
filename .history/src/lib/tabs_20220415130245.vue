<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav">
    <div class="gulu-tabs-nav-item" @click="select(t)"
    :class="{selected : t === selected}"
     v-for="(t,index) in titles" 
     ref="el => {if(el) navItems[index] === el}"
     :key="index">{{t}}</div>
     <div class="gulu-tabs-nav-indicator"></div>
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
import {computed, onMounted, ref} from 'vue';
import Tab from './Tab.vue'
export default {
    props:{
        selected:{
            type:String
        }
    },
    // setup只会在页面挂载的时候执行一遍，之后不会再执行
  setup(props, context) {

    const navItems = ref([]);
    // 每次挂载之后执行
    onMounted(() => {
        const divs = navItems.value;
        const div = divs.filter((item) => {
          return item.props.title === 'selected'
        })
        console.log('div',div)
    });


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
      navItems
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