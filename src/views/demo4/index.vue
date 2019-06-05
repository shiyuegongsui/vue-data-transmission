<template>
<div>
    <h2>方法四: $attrs　/ $listeners </h2>

    $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。
    <br />
    $listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

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
