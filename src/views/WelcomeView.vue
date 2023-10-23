<template>
  <div class="container d-flex justify-content-center">
    <div class="row w-100 justify-content-center">
      <div
        class="col-12 col-sm-10 col-md-8 col-lg-6 bg-light rounded-4 py-5 border border-primary border-2 shadow"
      >
        <p class="text-center">Welcome to the Chat</p>
        <div v-if="showLogin">
          <LoginForm @login="enterChat" />
          <p class="mb-0 text-center">
            No account yet?
            <span
              @click="showLogin = false"
              type="button"
              class="text-primary text-decoration-underline fw-bold"
              >Signup</span
            >
            instead
          </p>
        </div>
        <div v-else>
          <SignupForm @signup="enterChat" />
          <p class="mb-0 text-center">
            Already registered?
            <span
              @click="showLogin = true"
              type="button"
              class="text-primary text-decoration-underline fw-bold"
              >Login</span
            >
            instead!
          </p>
          <div class="text-center form-text text-warning" role="alert">
            Signup temporarily disabled to prevent misuse
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import LoginForm from "../components/LoginForm.vue"
import SignupForm from "../components/SignupForm.vue"
import { useRouter } from "vue-router"

const router = useRouter()
const showLogin = ref(true)

function enterChat() {
  router.push({ name: "Chatroom" })
}
</script>
