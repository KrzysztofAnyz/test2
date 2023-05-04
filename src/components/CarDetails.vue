<template>
    <h1>CarDetails component</h1>
    <h1>test2: {{ reg_number }}</h1>
</template>

<script>
    export default {
        name: 'CarDetails',
        props: {
            reg_number: String
        },
    }
</script>

<style>
</style>