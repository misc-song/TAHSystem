<template>
    <div class="home">
        <LeftMenu></LeftMenu>
        <MainContainer></MainContainer>
    </div>
</template>

<script>
    import LeftMenu from "./LeftMenu.vue";
    import MainContainer from "./MainContainer.vue";

    export default {
        name: 'Home',
        props: {
            //  msg: String
        },
        components: {
            LeftMenu,
            MainContainer,
            //Compare
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

