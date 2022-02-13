<template>
  <navbar class="navbar-container">
    <div class="nav-item bg-success p-3">
      <div class="navbar-brand">
        <h1 class="nav-title text-white">
          {{ navbarBrandText }}
        </h1>
      </div>
    </div>
  </navbar>
</template>

<script>
export default {
  name: "Header",
  props: {
    navbarBrandText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>