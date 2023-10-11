<template>
  <div class="container d-flex justify-content-center">
    <div class="row w-100 justify-content-center">
      <div
        class="col-12 col-sm-10 col-md-8 col-lg-6 bg-light rounded-bottom-4 border border-primary border-2 shadow hstack"
      >
        <div class="w-100">
          <p class="text-danger mt-1 mb-1 text-center" v-if="error">
            {{ error }}
          </p>
          <textarea
            placeholder="Hit enter to send message"
            class="form-control m-1 border-0 bg-white mx-0 my-2"
            id="exampleFormControlTextarea1"
            rows="1"
            v-model="message"
            @keydown.enter.exact.prevent="handleSubmit"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import getUser from "../composables/getUser"
import useCollection from "../composables/useCollection"
import { timestamp } from "../firebase/config"

const { error, addDoc } = useCollection("messages")
const { user } = getUser()
const message = ref("")

async function handleSubmit() {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp()
  }
  await addDoc(chat)
  if (!error.value) {
    message.value = ""
  }
}
</script>
