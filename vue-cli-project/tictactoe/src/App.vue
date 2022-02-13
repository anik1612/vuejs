<template>
  <div>
    <Header navbarBrandText="AS TECH" />
    <Tictactoe />
    <Footer copyright="Anik Sarker" />
  </div>
</template>

<script>
import Header from "../src/layout/Header.vue";
import Footer from "../src/layout/Footer.vue";
import Tictactoe from "../src/components/Tictactoe.vue";

export default {
  name: "App",
  components: {
    Header,
    Tictactoe,
    Footer,
  },
};
</script>

<style>
</style>
