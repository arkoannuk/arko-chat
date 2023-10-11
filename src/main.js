import "./assets/main.scss"
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap"
import { projectAuth } from "./firebase/config"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

let app
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app")
  }
})
