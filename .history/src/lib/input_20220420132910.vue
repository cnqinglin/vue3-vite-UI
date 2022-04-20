<template>
  <div>
      <input type="text" :readonly="{readonly}" :disabled="{disabled}" value="modelValue" @input="iptChange" />
  </div>
</template>
<script lang="ts">
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
    const disabled = props.disabled;
    const readonly = props.readonly;
    
    const iptChange = (e) => {
      content.emit('update:modelValue',e.target.value)
    }
    return {  
        iptChange,disabled,readonly
     };
  },
};
</script>
