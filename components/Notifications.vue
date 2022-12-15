<template>
  <div :class="$style.Notifications">
    <Notification color="rgb(32, 167, 77)"> Check your email! </Notification>
  </div>
</template>

<style scoped module lang="scss">
.Notifications {
  display: flex;
  height: 100%;
  width: 20%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  z-index: 2;
}
</style>
