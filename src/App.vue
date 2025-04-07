<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import LineBreakComponent from "./components/LineBreakComponent.vue";
import { useCheckMobileStore } from "./stores/useCheckMobileStore";

const content = {
  desktop: "안녕하세요",
  mobile: "안녕\n하세요"
};

const checkMobileStore = useCheckMobileStore();

onMounted(() => {
  window.addEventListener("resize", checkMobileStore.onCheckMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobileStore.onCheckMobile);
});
</script>

<template>
  <LineBreakComponent :content="content" />
  <RouterView />
</template>

<style scoped></style>
