<template>
<div @click="child2">
    <h4>child2{{name}}</h4>
    {{coo}},{{foo}}
</div>
</template>

<script>
export default {
    name: 'app',
    components: {},
    props: ["coo", "foo"],
    inject: [
        'name'
    ],
    data() {
        return {}
    },
    created() {},
    methods: {
        child2() {
            this.$emit("child2")
        }
    }
}
</script>

<style scoped></style>
