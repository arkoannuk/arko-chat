<template>
  <nav class="container d-flex justify-content-center" v-if="user">
    <div class="row w-100 justify-content-center">
      <div
        class="col-12 col-sm-10 col-md-8 col-lg-6 bg-light rounded-top-4 border border-primary border-2 shadow border-bottom-0 hstack"
      >
        <div>
          <p class="text-center mb-0 pt-2">
            Hey there <span class="fw-bold">{{ user.displayName }}</span>
          </p>
          <p class="form-text mb-2">{{ user.email }}</p>
        </div>
        <button @click="handleClick" class="btn btn-sm btn-primary ms-auto">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import useLogout from "../composables/useLogout"
import getUser from "../composables/getUser"
import { useRouter } from "vue-router"
const router = useRouter()

const { user } = getUser()
const { error, logout } = useLogout()

async function handleClick() {
  await logout()
  if (!error.value) {
    // console.log("User logged out")
    router.push({ name: "Welcome" })
  }
}
</script>
