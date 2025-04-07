<template>
  <p v-for="desktopContent in splittedDesktopContent">{{ desktopContent }}</p>
  <p v-for="mobileContent in splittedMobileContent">{{ mobileContent }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: {
    mobile: string;
    desktop: string;
  };
}>();

const splittedMobileContent = props.content.mobile.split("\n");
const splittedDesktopContent = props.content.desktop.split("\n");
</script>

<style scoped>
p {
  white-space: pre-wrap;
}
</style>
