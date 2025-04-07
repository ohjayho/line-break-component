<template>
  <p v-if="!isMobile" v-for="desktopContent in splittedDesktopContent">
    {{ desktopContent }}
  </p>
  <template
    v-if="isMobile"
    v-for="(mobileContent, index) in splittedMobileContent"
  >
    <p :class="{ pseudoPragraphTag: index > 0 }">{{ mobileContent }}</p>
  </template>
</template>

<script setup lang="ts">
import { useCheckMobileStore } from "@/stores/useCheckMobileStore";
import { storeToRefs } from "pinia";

const props = defineProps<{
  content: {
    mobile: string;
    desktop: string;
  };
}>();

const checkMobileStore = useCheckMobileStore();
const { isMobile } = storeToRefs(checkMobileStore);

const splittedMobileContent = props.content.mobile.split("\n");
const splittedDesktopContent = props.content.desktop.split("\n");
</script>

<style scoped>
p {
  white-space: pre-wrap;
}
</style>
