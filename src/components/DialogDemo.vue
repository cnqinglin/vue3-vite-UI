<template>
  <h1>示例一</h1>
  <Button @click="toggle">toggle</Button>
  <!-- <Dialog v-model:visible="x" @update:visible="x = $event"></Dialog> -->  <!--这是下一行的全写-->
  <Dialog v-model:visible="x" :closeOnclickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <h1>22323</h1>
      <strong>hhhhhh</strong>
    </template>
    <template v-slot:title>
      <h1>提示</h1>
    </template>
  </Dialog>

  <h1>示例二</h1>
  <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog  from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

import{openDialog} from '../lib/openDialog'
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
      /**示例2**/
      const showDialog = () => {
        openDialog({
          title:'标题',
          content:'内容',
          ok(){
            console.log('ok')
          },
          cancel(){
            console.log('cancel')
          }
        })
      } 
      return {
        x,
        toggle,
        f1,
        f2,
        showDialog
      }
  },
}
</script>