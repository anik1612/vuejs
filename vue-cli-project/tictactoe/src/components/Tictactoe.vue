<template>
  <div class="container">
    <div class="row d-flex justify-content-center mt-5">
      <div v-for="(item, i) in items" :key="i" class="card col-3 m-1">
        <p>{{ item.id }}</p>
        <img :src="item.src" alt="item.id-img" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import items from "../data/arrayList";

export default {
  name: "Tictactoe",
  data() {
    return {
      items,
    };
  },
};
</script>

<style>
</style>