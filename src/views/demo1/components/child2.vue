<template>
<div @click="changeTitle">
    <h4>child2</h4>
    {{title}}
</div>
</template>

<script>
export default {
    name: 'app',
    components: {},
    props: ["title"],
    data() {
        return {}
    },
    created() {},
    methods: {
        changeTitle() {
            this.$emit("changeTitle","child2");
        }
    }
}
</script>

<style scoped></style>
