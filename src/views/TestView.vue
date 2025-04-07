<script setup lang="ts">
const text = `이건 짧은 문장입니다.\n이건 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 매우 긴 문장입니다.\n이것도 짧은 문장입니다.`;
const lines = text.split("\n");
</script>

<template>
  <h2>🌀 \n + pre-line 방식</h2>
  <p class="text-block pre-line">
    {{ text }}
  </p>

  <h2>🧱 &lt;p&gt; 분리 방식</h2>
  <div class="text-block">
    <p v-for="(line, index) in lines" :key="index" class="line">
      {{ line }}
    </p>
  </div>
</template>

<style scoped>
.text-block {
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 16px;
  word-break: keep-all;
}

.pre-line {
  white-space: pre-line;
  background: #eef;
}

.line {
  margin: 0 0 0.5rem;
  background: #ffe;
}
</style>
