<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue3-UI"></use>
    </svg>  
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$text-color:#18a19a;
    .icon {
       width: .5em; height: .5em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

.topnav {
  // background: pink;
  color:$text-color;
  display: flex;
  padding: 16px;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  background: #18a19a;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width :32px;
      height:32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 3em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: fade-out(black, 0.9);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>