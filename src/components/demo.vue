<template>
    <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button v-if="visible" @click="hideCode">隐藏代码</Button>
      <Button v-else @click="showCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="visible">
      <pre>{{component.__sourceCode}}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default{
    props:{
        component:Object,
    },
    setup(){
        const visible = ref(false);
        const hideCode = () => visible.value = false
        const showCode = () => visible.value = true
        return {
            visible,
            hideCode,
            showCode
        }
    }
}
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  border-radius: 6px;
  margin: 20px 0 40px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>