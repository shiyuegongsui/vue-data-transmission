<template>
<div @click="changeN">
    <h4>child1</h4>
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
    methods: {
        changeN() {
            this.$store.commit("updateCount")
        }
    }
}
</script>

<style scoped></style>
