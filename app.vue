<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <NuxtLayout v-if="user">
    <NuxtPage />
  </NuxtLayout>

  <div :class="$style['background-content']" />
  <main :class="$style['main-content']">
    <header>Dashboard</header>
    <p>One place to manage your daily life</p>
  </main>
  <NuxtLink href="/Auth/Account"> Create Your Account </NuxtLink>
</template>

<style module scoped lang="scss">
@keyframes bg-slide {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0%);
  }
}
.background-content {
  position: absolute;
  width: 70%;
  height: 55%;
  background-color: #161616;
  .SignUp {
    display: flex;
    height: 3rem;
    width: 20%;
    outline: solid 2px #fff;
  }
  outline: solid 2px #fff;
  rotate: 1 1 0 -30deg;
  border-radius: 8px;
  animation: bg-slide 1s;
  .SignUp {
    display: flex;
    height: 3rem;
    width: 20%;
    outline: solid 2px #fff;
  }
}
.main-content {
  display: flex;
  width: 70%;
  color: #ffffff;
  // height: 30%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  header {
    font-family: Inter, system-ui, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
      "Noto Color Emoji", sans-serif;
    font-weight: 800;
    font-size: 7rem;
  }
  p {
    font-size: 2rem;
  }
}

a {
  display: flex;
  box-sizing: border-box;
  height: 3rem;
  width: 20%;
  background: #ff7d8a;
  color: #000;
  outline: solid 2px #fff;
  border-radius: 2px;
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  padding: 0;
  transition: background 0.3s, outline 0.3s;
}
a:hover {
  background: #ff5768;
  outline: solid 2px #ff5768;
}
</style>
