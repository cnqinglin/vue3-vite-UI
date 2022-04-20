<template>
  <div>
      <input type="text" :readonly="{readonly}" :disabled="{disabled}" value="modelValue" @input="iptChange" />
  </div>
</template>
<script lang="ts">
import { computed } from '@vue/runtime-core';
export default {
  props: {
    modelValue:{
        type:String,
        default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:Boolean,
  },
  setup(props,content) {
    const readonly = computed(() => {
      return props.readonly
    })
    const disabled = computed(() => {
      return props.disabled
    })
    console.log('disabled',disabled)
    console.log('readonly',readonly)
    const iptChange = (e) => {
      content.emit('update:modelValue',e.target.value)
    }
    return {  
        iptChange,disabled,readonly
     };
  },
};
</script>
