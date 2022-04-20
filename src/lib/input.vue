<template>
  <div>
      <input class="iput" 
        type="text" 
        :readonly="readonly" 
        :disabled="disabled"
        value="modelValue" 
        @input="iptChange" />
        
        <Button class="checkBtn" v-if="type === 'email'" @click="validateInput">输入框校验</Button>
        <div v-if="ispassed === false" ref="errContent" class="errMsg">{{errMessage}}</div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import {
    // PropType,
    // reactive,
    ref
} from 'vue'
// interface RuleProp {
//   type: 'required' | 'email'
//   message: string
// }
// type RulesProp = RuleProp[]
export default {
    components: {
        Button
    },
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
    },
    type:String
  },
  setup(props,context) {
    const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const errContent = ref<HTMLDivElement>(null)
    let passed = ref(true)
    const ispassed = ref(true);
    let errMessage = ref('fff')
    // const inputRef = reactive({
    //   val: '',
    //   error: false,
    //   message: ''
    // })
    
    const validateInput = () => {
      if (props.type && props.type === 'email') { 
            passed.value = emailReg.test(props.modelValue)
            ispassed.value = passed.value
            if(ispassed.value === false){
                errMessage.value = '请输入正确的邮箱地址'
            } 
        }
    };
    const iptChange = (e) => {
      context.emit('update:modelValue',e.target.value)
    };
    return {  
        iptChange,
        validateInput,
        passed,
        ispassed,
        errMessage,
        errContent
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
.checkBtn {
    margin-left:10px;
}
.errMsg {
    color:red;font-size:12px;
}
</style>