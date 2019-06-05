<template>
<div>
    <h2>方法三:Vuex </h2>
    {{n}}
    {{m}}
    <div class="demo">
        <child1 title="我是父元素传过去的值child1"></child1>
        <child2 title="我是父元素传过去的值child2"></child2>
    </div>

    <div @click="changeN">
        changeN
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
    computed: {
        n() {
            return this.$store.state.demo.count
        },
        m() {
            return this.$store.getters.countDesc
        },
    },
    data() {
        return {}
    },
    methods: {
        changeN() {
            this.$store.commit("updateCount")
        }
    }
}
</script>

<style scoped></style>
