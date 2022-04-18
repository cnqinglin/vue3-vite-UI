<template>
    <article class="markdown-body" v-html="markdown">
    </article>
</template>
<script lang="js">
import md from '../markdown/install.md';
import {ref} from 'vue';
export default{
    setup(){    
         const markdown = ref(md)
        return {markdown}
    }
}
</script>