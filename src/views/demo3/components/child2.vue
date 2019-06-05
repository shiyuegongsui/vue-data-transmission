<template>
<div>
    <h4>child2</h4>
    {{n}}
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
    computed: {
        n() {
            return this.$store.state.demo.count
        },
    },
    created() {},
    methods: {}
}
</script>

<style scoped></style>
