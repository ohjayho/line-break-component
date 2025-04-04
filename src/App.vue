<script setup lang="ts">
import LineBreakComponent from "./components/LineBreakComponent.vue";

const content = {
  desktop: "안녕하세요",
  mobile: "안녕\n하세요"
};
</script>

<template>
  <LineBreakComponent :content="content" />
</template>

<style scoped></style>
