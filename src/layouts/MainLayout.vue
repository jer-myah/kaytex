<template>
    <div>
        <header-component></header-component>
        
        <slot />
        
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from "../components/layout-components/Header.vue";
import FooterComponent from "../components/layout-components/Footer.vue";

export default {
    name: 'MainLayout',
    components: {
        HeaderComponent,
        FooterComponent
    },
    props: {

    },
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
