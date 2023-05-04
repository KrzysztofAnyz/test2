<template>
    <div>
        <TopBar />
        <CarList />
    </div>
</template>

<script>
    import TopBar from '@/components/TopBar.vue'
    import CarList from '@/components/CarList.vue';

    export default {
        name: 'HomeView',
        components: {
            TopBar,
            CarList
        }
    }
</script>
<style>
</style>