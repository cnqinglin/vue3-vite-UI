<template>
  <Button @click="toggle">toggle</Button>
  <!-- <Dialog v-model:visible="x" @update:visible="x = $event"></Dialog> -->  <!--这是下一行的全写-->
  <Dialog v-model:visible="x" :closeOnclickOverlay="false" :ok="f1" :cancel="f2">
    <p>第一行字2131</p>
    <strong> 内容</strong>
    <template v-slot:content>
      <h1>22323</h1>
      <strog>hhhhhh</strog>
    </template>
    <template v-slot:title>
      <h1>提示</h1>
    </template>
  </Dialog>
</template>
<script lang="ts">
import Dialog  from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
export default {
  components:{
        Dialog,
        Button,
  },
  setup(props,context){
      const x = ref(false);
      const toggle = () =>{
        x.value = !x.value
      } 
      const f1 = () => {
        return true;
      }
      const f2 = () => {
        console.log('f2')
        return false;
      }
      return {
        x,
        toggle,
        f1,f2
      }
  },
}
</script>