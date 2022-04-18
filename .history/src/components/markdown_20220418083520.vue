<template>
    <article class="markdown-body" v-html="content"></article>
</template>
<script lang="js">  
import {ref} from 'vue';
export default{
    props:{
        path:{
            type:String,
            required:true,
        }
    },
    setup(props,context){  
        // import()  是一个异步的操作，所下面的代码通过一个容器来实现  
        //  import(props.path)
        const content = ref<String>(null)
        import(props.path).then(result => {
            console.log('content',content)
            // content. = result.default
        })
        return {
            content
        }
    }
}
</script>