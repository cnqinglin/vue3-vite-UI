<demo>
  支持两种验证功能
</demo>
<template>
<Input v-model="content" type="email"/>
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