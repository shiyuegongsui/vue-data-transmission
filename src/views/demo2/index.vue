<template>
<div>
    <h2>方法二:eventBus </h2>
    <p>
        这种方法通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级
    </p>
    <p>方法1：<br />
    将$eventBus直接注入到$root中<br />
    demo:<br />
    发送：<br />
    this.$root.$emit("add-todo", "123456");<br />
    接收在created生命周期中<br />

    created(){<br />
    this.$root.$on("add-todo",(value)=>{<br />
        console.log(value);<br />
     })<br />
    },<br />
    </p>

        <p>
            方法二：<br />
    在 main.js中注册 $eventBus<br />

    Vue.use({<br />
        install(Vue) {<br />
            Vue.prototype.$eventBus = new Vue;<br />
        }<br />
    })<br />

    demo:<br />
    发送： <br />
    this.$eventBus.$emit("add-todo", "123456");<br />
    接收在created生命周期中<br />

    created(){<br />
    this.$eventBus.$on("add-todo",(value)=>{<br />
    console.log(value);<br />
    })<br />
    },<br />
    </p>

            <div class="demo">
                <child1 title="我是父元素传过去的值child1"></child1>
                <child2 title="我是父元素传过去的值child2"></child2>
            </div>

</div>
</template>

<script>
import child1 from './components/child1';
import child2 from './components/child2';

export default {
    name: 'app',
    components: {
        child1,
        child2
    },
    data() {
        return {}
    },
    created() {
        this.$root.$on("add-todo", (value) => {
            console.log(value);

        })
    },
    methods: {}
}
</script>

<style scoped></style>
