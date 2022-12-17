<script lang="ts">
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

let padhh = hours < 10 ? "0" + hours : hours;
let padmm = minutes < 10 ? "0" + minutes : minutes;
let padss = seconds < 10 ? "0" + seconds : seconds;

let interval: any;

export default defineNuxtComponent({
  data() {
    return {
      hours: padhh,
      minutes: padmm,
      seconds: padss,
    };
  },
  computed: {
    hh() {
      return this.$data.hours;
    },
    mm() {
      return this.$data.minutes;
    },
    ss() {
      return this.$data.seconds;
    },
  },
  mounted() {
    interval = setInterval(() => {
      const date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();

      let padhh = hh < 10 ? "0" + hh : hh;
      let padmm = mm < 10 ? "0" + mm : mm;
      let padss = ss < 10 ? "0" + ss : ss;

      this.$data.hours = padhh.toString();
      this.$data.minutes = padmm.toString();
      this.$data.seconds = padss.toString();
    }, 1000);
  },
  unmounted() {
    clearInterval(interval || 0);
  },
});
</script>

<template>
  <div :class="$style.clock">
    <header>
      <span>{{ hh }}</span
      >:<span>{{ mm }}</span
      ><span style="font-size: 4rem">:{{ ss }}</span>
    </header>
  </div>
</template>

<style module scoped lang="scss">
.clock {
  display: flex;
  font-family: "Lato", sans-serif;
  //   font-weight: 400;
  font-size: 8rem;
}
</style>
