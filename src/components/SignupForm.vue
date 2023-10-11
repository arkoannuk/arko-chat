<template>
  <h2 class="text-center mb-3">Create Account</h2>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="signupName" class="form-label">Username</label>
      <input
        type="text"
        autocomplete="username"
        class="form-control"
        id="signupName"
        required
        v-model="displayName"
      />
    </div>
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
        minlength="6"
        v-model="password"
      />
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary mb-3">Sign Up</button>
      <div class="text-danger">{{ error }}</div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue"
import useSignup from "../composables/useSignup"
const emit = defineEmits(["signup"])

const { error, signup } = useSignup()
const displayName = ref("")
const email = ref("")
const password = ref("")

async function handleSubmit() {
  await signup(email.value, password.value, displayName.value)
  if (!error.value) {
    emit("signup")
  }
}
</script>
