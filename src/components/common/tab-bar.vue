<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "tab-bar",
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: center;
}
</style>
