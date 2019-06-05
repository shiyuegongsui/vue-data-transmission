<template>
<div>
    <h2>方法五: provide/inject </h2>

    Vue2.2.0新增API,这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。一言而蔽之：祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量。provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

    <div class="demo">
        <child1 :foo="foo" :coo="coo" @child2="child2"></child1>
    </div>

</div>
</template>

<script>
import child1 from './components/child1';

export default {
    name: 'app',
    components: {
        child1,
    },
    provide: {
        name: '浪里行舟'
    },
    data() {
        return {
            foo: "Hello, world",
            coo: "Hello,rui"
        }
    },
    created() {},
    methods: {
        child2() {
            console.log("我在父组件获取到child2事件啦");
        }
    }
}
</script>

<style scoped></style>
