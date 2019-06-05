<template>
<div @click="changeTitle">
    <h4>child1</h4>
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
            this.$root.$emit("add-todo", "123456");
        }
    }
}
</script>

<style scoped></style>
