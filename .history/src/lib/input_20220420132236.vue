<template>
  <div>
      <input type="text" :disabled="{disabled}" value="modelValue" @input="iptChange" />
  </div>
</template>
<script lang="ts">
import { computed,onMounted,ref,watchEffect } from "vue";
export default {
  props: {
    modelValue:{
        type:String,
        default:''
    },
    disabled:{
      type:Boolean,
      default:false
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
