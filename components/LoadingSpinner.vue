<script setup lang="ts">
defineNuxtComponent({
  props: ["style"],
});
</script>

<template>
  <div :class="$style.loading" :style="$style" />
</template>

<style scoped module lang="scss">
.loading {
  display: flex;
  border-radius: 50%;
  height: 100%;
  aspect-ratio: 1/1;
  border: solid rgba(255, 255, 255, 0.3);
  border-right: solid #fff;
  animation: loading 1s infinite linear;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  //   50% {
  //     transform: rotate(180deg);
  //   }
  100% {
    transform: rotate(360deg);
  }
}
</style>
