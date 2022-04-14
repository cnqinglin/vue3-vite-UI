<template>
  <Tabs>
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/tabs.vue';
import Tab from '../lib/tab.vue';
export default{
  components:{
    Tabs,
    Tab
  },
  setup() {
    
  },
}
</script>
