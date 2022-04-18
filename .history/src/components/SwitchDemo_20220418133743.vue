<template>
  <div>
    <h1>Switch组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <Switch1Demo />
    </div>
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue';
import Switch1Demo from './switch1Demo.vue';
import Switch2Demo from './switchDemo.vue'
export default {
  components: {Switch},
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>