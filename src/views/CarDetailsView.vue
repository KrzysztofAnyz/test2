<template>
    <TopBar />
    <CarDetails :reg_number="this.$route.params.reg_number"/>
</template>

<script>
    import TopBar from '@/components/TopBar.vue'
    import CarDetails from '../components/CarDetails.vue';

    export default {
        name: 'CarDetailsView',
        components: {
            TopBar,
            CarDetails
        }
    }
</script>

<style>
</style>