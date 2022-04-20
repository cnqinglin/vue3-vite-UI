<template>
  <button class="gulu-switch" @click="toggle" :class="[classes,{'gulu-checked':value}]">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref,computed } from "vue";
export default {
  props: {
    value: Boolean,
    size :{
      type: String,
      default: "normal",
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    const classes = computed(() => {
      return {
        [`gulu-size-${props.size}`]: props.size,
      };
    });
    return { 
      toggle,
      classes 
    };
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  display: block;
  margin-top: 8px;
  height: $h; 
  width: $h * 2; 
  border: none; 
  background: #bfbfbf; 
  border-radius: $h/2; 
  position: relative;
  > span {
    position: absolute; 
    top: 2px; 
    left: 2px; 
    height: $h2; 
    width: $h2; 
    background: white; 
    border-radius: $h2 / 2; 
    transition: all 250ms;
  }
  &.gulu-checked.gulu-size-normal { background: #1890ff;
    > span { left: calc(100% - #{$h2} - 2px); }
  }
  &.gulu-checked.gulu-size-big { background: #1890ff;
    > span { left: calc(84% - #{$h2} - 2px); }
  }
  &.gulu-checked.gulu-size-small { background: #1890ff;
    > span { left: calc(84% - #{$h2/2} - 2px); }
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.gulu-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
.gulu-size-big {
  height: $h * 1.5; 
  width: $h * 3; 
  border: none; 
  background: #bfbfbf; 
  border-radius: $h; 
  position: relative;
  > span {
    position: absolute; 
    top: 3px; 
    right: 2px;
    height: $h2 * 1.5;
    width: $h2 * 1.5;  
    background: white; 
    border-radius: $h2; 
    transition: all 250ms;
  }
}
.gulu-size-small {
  height: 18px; 
  width: 34px; 
  border: none; 
  background: #bfbfbf; 
  border-radius: 14px;
  position: relative;
  > span {
    position: absolute; 
    top: 3px; 
    right: 1px;
    height: 12px;
    width: 12px; 
    background: white; 
    border-radius: 16px;
    transition: all 250ms;
  }
}
</style>