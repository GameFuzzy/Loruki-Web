<template>
  <div id="app">
    <!-- Navbar-->
    <div class="navbar">
      <div class="container flex">
        <h1 class="logo">Loruki</h1>
        <nav>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/features">Features</nuxt-link></li>
            <li><nuxt-link to="/docs">Docs</nuxt-link></li>
            <li v-if="me">
              <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
            <li v-if="me">You are logged in as: {{ me.username }}</li>
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
    <Nuxt />
  </div>
</template>

<script lang="ts">
import meQuery from '../graphql/queries/me.gql'
import refreshAccessTokenMixin from '~/mixins/refreshAccessTokenMixin'
import refreshAccessTokenMiddleware from '~/middleware/refreshAccessTokenMiddleware'

export default {
  // The composition API has problems with client-side only fetching
  apollo: {
    me: {
      prefetch: false,
      query: meQuery
    }
  },
  mixins: [refreshAccessTokenMixin],
  middleware: [refreshAccessTokenMiddleware]
}
</script>

<style lang="scss">
@use '../assets/styles/utilities.scss';
@use '../assets/styles/app.scss';
</style>
