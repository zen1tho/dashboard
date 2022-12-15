<script lang="ts">
export default defineNuxtComponent({
  props: ["placeholder", "icon"],
});
</script>

<template>
  <div :class="`${$style.input} ${$style.email}`">
    <input :placeholder="placeholder" />
    <div :class="$style.icon" :style="`background-image: url('${icon}')`" />
  </div>
</template>

<style scoped module lang="scss">
.input {
  position: relative;
  margin-top: 2rem;
  width: 33%;
  height: 3rem;
  background-color: #222;
  border: none;
  outline: none;
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  color: inherit;
  height: 4rem;
  display: flex;
  font-size: 1.3rem;
  padding: 1rem;
  input {
    height: 100%;
    width: 100%;
    color: inherit;
    border: none;
    outline: none;
    background-color: #00000000;
    font-size: inherit;
    color: inherit;
  }
}
.input.email > .icon {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  aspect-ratio: 1/1;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
}
.input {
  pointer-events: none;
}
.input:focus {
  outline: solid #fff 2px;
}
.input {
  input {
    pointer-events: auto;
  }
}
</style>
