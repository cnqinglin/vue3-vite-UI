<template>
  <div>
      <input type="text" value="modelValue" @input="iptChange"></input> 
  </div>
</template>
<script lang="ts">
import { computed,onMounted,ref,watchEffect } from "vue";
export default {
  props: {
    modelValue:{
        type:String,
        default:''
    }
  },
  setup(props,content) {
    const iptChange = (e) => {
      content.emit('update:modelValue',e.target.value)
    }
    return { 
        iptChange
     };
  },
};
</script>
