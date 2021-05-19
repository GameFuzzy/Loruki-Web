<template>
  <div id="navbar">
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else class="container flex">
      <h1 class="logo">Loruki</h1>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/features">Features</nuxt-link></li>
          <li><nuxt-link to="/docs">Docs</nuxt-link></li>
          <li v-if="me">
            <nuxt-link to="/profile"
              >You are logged in as: {{ me.username }}</nuxt-link
            >
          </li>
          <li v-if="me">
            <button @click="logout">Logout</button>
          </li>
          <li v-if="!me">
            <nuxt-link to="/login">Sign in {{ me }}</nuxt-link>
          </li>
          <li v-if="!me">
            <nuxt-link to="/register">Register</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { defineComponent, useStore } from '@nuxtjs/composition-api'
import {
  MeDocument,
  useLogoutUserMutation,
  useMeQuery
} from '@/generated/graphql'
import { useResult } from '@vue/apollo-composable'

export default defineComponent({
  setup() {
    const store = useStore()
    const { result } = useMeQuery()
    const me = useResult(result, null, (data) => data.me)
    const { mutate } = useLogoutUserMutation({
      update: (store) => {
        store.writeQuery({
          query: MeDocument,
          data: {
            me: null
          }
        })
      }
    })

    function logout() {
      mutate()
      store.commit('accessToken/set', { token: '' })
    }
    return { me, logout }
  }
})
</script>

<style lang="scss" scoped>
@use '../assets/styles/navbar.scss';
</style>
