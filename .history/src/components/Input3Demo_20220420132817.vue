<demo>
支持readonly属性
</demo>
<template>
<Input v-model="content" readonly/>
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