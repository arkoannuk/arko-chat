<template>
  <h2 class="text-center mb-3">Login</h2>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="signupEmail" class="form-label">Email address</label>
      <input
        type="email"
        autocomplete="email"
        class="form-control"
        id="signupEmail"
        required
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="signupPassword" class="form-label">Password</label>
      <input
        type="password"
        autocomplete="current-password"
        class="form-control"
        id="signupPassword"
        required
        v-model="password"
      />
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary mb-3">Sign In</button>
      <div class="text-danger">{{ error }}</div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue"
import useLogin from "../composables/useLogin"
const emit = defineEmits(["login"])

const { error, login } = useLogin()
const email = ref("demo.user@gmail.com")
const password = ref("demo.user")

async function handleSubmit() {
  await login(email.value, password.value)
  if (!error.value) {
    emit("login")
  }
}
</script>
