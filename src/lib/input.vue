<template>
  <div>
      <span>{{label}}</span>
      <span>{{context}}</span>
  </div>
</template>
<script lang="ts">
import { computed,onMounted,ref,watchEffect } from "vue";
export default {
  props: {
    value:{
        type:String,
        default:''
    }
  },
  setup(props,content) {
      console.log('value',props.value)
      const label = ref('biaoti');
      const context = ref('neirong');

    // onMounted(() => {
    //   watchEffect(() => {
        
    //   })
    // })
    return { 
        label,
        context
     };
  },
};
</script>
