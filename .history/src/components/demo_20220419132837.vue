<template>
    <div class="demo">
    <h2>标题</h2>
    <div class="demo-component">
      <component :is="Switch1Demo" />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{Switch1Demo.__sourceCode}}</pre>
    </div>
  </div>
</template>
<script lang="ts">
export default{

}
</script>