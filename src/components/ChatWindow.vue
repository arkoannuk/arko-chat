<template>
  <div class="container d-flex justify-content-center">
    <div class="row w-100 justify-content-center" style="max-height: 50%">
      <div
        class="col-12 col-sm-10 col-md-8 col-lg-6 bg-white border border-primary border-2 border-bottom-0 shadow p-0"
      >
        <p class="text-danger mt-1 mb-1 text-center" v-if="error">{{ error }} test</p>
        <div
          ref="messages"
          v-if="documents"
          class="overflow-auto mb-1 ps-3 pe-2"
          style="position: relative; height: 50vh"
        >
          <div v-for="doc in documents" :key="doc.id">
            <div class="form-text">{{ formatDistanceToNow(doc.createdAt.toDate()) }}</div>
            <div class="fw-medium">
              {{ doc.name }} <span class="ps-1 fw-normal">{{ doc.message }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUpdated, ref } from "vue"
import getCollection from "../composables/getCollection"
import { formatDistanceToNow } from "date-fns"

const messages = ref(null)

const scrollToBottom = () => {
  if (messages.value) {
    messages.value.scrollTop = messages.value.scrollHeight
  }
}
onUpdated(() => {
  scrollToBottom()
})

const { error, documents } = getCollection("messages")
</script>
