<template>
  <div>
      <input class="iput" type="text" :readonly="readonly" :disabled="disabled" value="modelValue" @input="iptChange" />
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
    readonly:{
      type:Boolean,
      default:false
    }
  },
  setup(props,content) {
    console.log('sss',props);
    const iptChange = (e) => {
      content.emit('update:modelValue',e.target.value)
    }
    return {  
        iptChange,
     };
  },
};
</script>
<style lang="scss" scoped>
$w:200px;
$h:28px;
.iput {
  width:$w;
  height:$h;
}
</style>
