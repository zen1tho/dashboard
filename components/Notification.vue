<script setup lang="ts">
defineProps({ color: String });
</script>
<script lang="ts">
export default defineNuxtComponent({
  mounted() {
    setTimeout(() => {
      this.$refs.notif.style.opacity = 0;
      setTimeout(() => {
        this.$refs.notif.remove();
      }, 200);
    }, 2000);
  },
});
</script>

<template>
  <div
    :class="$style.Notification"
    :style="`background-color: ${color};`"
    ref="notif"
  >
    <div :style="`height: 100%; position: absolute; left: 0; padding: 1.3rem;`">
      <LoadingSpinner />
    </div>
    <span :class="$style.title"><slot /></span>
  </div>
</template>
<style scoped module lang="scss">
@keyframes Notif {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateY(0%);
  }
}
.Notification {
  width: 100%;
  height: 5rem;
  border-radius: 4px;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: Notif 1s;
  transition: opacity 200ms;
  .title {
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
  }
}
</style>
