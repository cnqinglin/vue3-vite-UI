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
    const iptChange = (e) => {
      content.emit('update:modelValue',e.target.value)
    }
    return {  
        iptChange,disabled,readonly
     };
  },
};
</script>
