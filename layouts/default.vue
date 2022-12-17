<script lang="ts" setup>
import { ref } from "vue";
const time = ref("12:00");
</script>

<template>
  <div>
    <span><Clock /> </span>
    <slot />
  </div>
</template>
