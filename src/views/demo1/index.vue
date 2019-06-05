<template>
<div>
    <h2>方法一</h2>
    父组件A通过props的方式向子组件B传递，B to A 通过在 B 组件中 $emit, A 组件中 v-on 的方式实现。

    <div class="demo">
        <child1 title="我是父元素传过去的值child1" @changeTitle="demo"></child1>
        <child2 title="我是父元素传过去的值child2" @changeTitle="demo"></child2>
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
    created() {},
    methods: {
        demo(value) {
            alert(value);
        }
    }
}
</script>

<style scoped></style>
