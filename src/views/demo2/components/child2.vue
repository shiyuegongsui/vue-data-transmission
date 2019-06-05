<template>
<div>
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
    created() {
        this.$root.$on("add-todo", (value) => {
            console.log(value);
        })
    },
    methods: {}
}
</script>

<style scoped></style>
