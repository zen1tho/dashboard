<script lang="ts">
definePageMeta({
  layout: "custom",
});
</script>
<script setup lang="ts">
const supabase = useSupabaseClient();
const loading = ref(false);
const email = ref("");
const handleLogin = async () => {
  try {
    loading.value = true;
    console.log(email.value);
    const { error } = await supabase.auth.signInWithOtp({ email: email.value });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error: any) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <header :class="$style.Header">Sign In</header>
  <div :class="`${$style.input} ${$style.email}`">
    <input
      placeholder="you@example.com"
      v-model="email"
      v-if="!loading"
      @keypress="(e) => e.key === 'Enter' && handleLogin()"
    />
    <LoadingSpinner v-else />
    <div :class="$style.icon" />
  </div>
  <button :class="$style.sendLink" @click="handleLogin">Send me a link!</button>
</template>

<style scoped module lang="scss">
.Header {
  font-family: "DM Sans", sans-serif;
  font-size: 4.5rem;
}
.sendLink {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  border-radius: 3px;
  width: 12%;
  outline: none;
  border: none;
  background-color: #1e90ff;
  height: 3rem;
  color: inherit;
  font-weight: 500;
  transition: background 0.2s;
  cursor: pointer;
}
.sendLink:hover {
  background-color: #1e8fffc5;
}
.sendLink:active,
.sendLink:focus {
  outline: solid #fff 2px;
}
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
  outline: solid 2px #222;
  transition: outline 0.2s;
}
.input.email > .icon {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  aspect-ratio: 1/1;
  background-image: url("../assets/svgs/mail.svg");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
}
.input {
  pointer-events: none;
}
.input:hover {
  outline: solid #fff 2px;
}
.input {
  input {
    pointer-events: auto;
  }
}
</style>
