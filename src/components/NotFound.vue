<template>
  <div class="d-flex justify-content-center text-center">
    <div class="card border-primary p-4">
      <h2>404</h2>
      <h3 class="fw-normal">Page Not Found</h3>
      <button @click="handleClick" class="btn btn-primary mt-3">Return Home</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()

async function handleClick() {
  router.push({ name: "Welcome" })
}
</script>
