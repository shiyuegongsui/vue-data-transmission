<template>
<div>
    <h4>child1</h4>
    <child2 v-bind="$attrs" v-on="$listeners" @child2="child2"></child2>
</div>
</template>

<script>
import child2 from './child2';

export default {
    name: 'app',
    components: {
        child2
    },

    data() {
        return {}
    },
    created() {},
    methods: {
        child2() {
            console.log("我不会被拦截哦");
        }
    }
}
</script>

<style scoped></style>
