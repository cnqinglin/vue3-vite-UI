<demo>
支持disabled属性
</demo>
<template>
<Input v-model="content" disabled/>
</template>

<script lang="ts">
import Input from '../lib/input.vue'
import {
  ref, watchEffect
} from 'vue'
export default {
  components: {
    Input
  },
  setup() {
    const content = ref('input内容')
    return {
      content
    }
  }
}
</script>