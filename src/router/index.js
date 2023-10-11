import { createRouter, createWebHistory } from "vue-router"
import WelcomeView from "../views/WelcomeView.vue"
import ChatroomView from "../views/ChatroomView.vue"
import NotFound from "../components/NotFound.vue"
import { projectAuth } from "../firebase/config"

// auth guard
// eslint-disable-next-line no-unused-vars
function requireAuth(to, from) {
  let user = projectAuth.currentUser
  if (!user) return { name: "Welcome" }
}

function requireNoAuth() {
  let user = projectAuth.currentUser
  if (user) return { name: "Chatroom" }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: WelcomeView,
      beforeEnter: requireNoAuth
    },
    {
      path: "/chatroom",
      name: "Chatroom",
      component: ChatroomView,
      beforeEnter: requireAuth
    },
    // catchall 404
    {
      path: "/:catchAll(.*)",
      component: NotFound
    }
  ]
})

export default router
