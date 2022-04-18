<template>
    <!-- <article class="markdown-body" v-html="markdown"></article> -->
    <Markdown path="../markdown/intro.md"></Markdown>
</template>
<script lang="js">
import Markdown from "../components/markdown.vue";
export default{
    components:{
        Markdown
    },
    setup(){    
        return {markdown}
    }
}
</script>