<template>
    <!-- <article class="markdown-body" v-html="markdown"></article> -->
    <Markdown path="../markdown/intro.md"></Markdown>
</template>
<script lang="js">
import Markdown from "../components/markdown.vue";
import {ref} from 'vue';
export default{
    components:{
        Markdown
    },
    setup(){    
         const markdown = ref(md)
        return {markdown}
    }
}
</script>