<template>
  <footer class="footer fixed-bottom">
    <div class="bg-success p-3 text-center text-white">
      All rights reserved by - &copy; {{ copyright }}
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    copyright: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>