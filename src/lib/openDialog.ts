import Dialog from './Dialog.vue'
import { createApp,h } from 'vue';
export const openDialog = (options) => { 
    const { content, title,ok,cancel } = options;
    const div = document.createElement('div');
    const close = () => { 
        //@ts-ignore
        app.unmount(div)
        div.remove()
    }
    document.body.appendChild(div);
    const app = createApp({
        render() { 
            return h(
                Dialog,
                {
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                        console.log('newVisible', newVisible)
                        if (newVisible === false) {
                            close()
                        }
                    },
                    ok,
                    cancel
                },
                {
                    title,
                    content,
                })
        }
    })
    app.mount(div);   // 把Dialog 转换为一个app,并挂载到div中
}