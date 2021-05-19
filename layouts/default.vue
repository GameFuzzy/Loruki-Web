<template>
  <div id="app">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Navbar-->
      <navbar />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useStore } from '@nuxtjs/composition-api'
import backendPathBuilder from '~/utilities/backendURIBuilder'

export default defineComponent({
  setup() {
    const store = useStore()
    let loading = ref(true)
    if (process.client) {
      fetch(`${backendPathBuilder(false)}/refresh_token`, {
        method: 'post',
        credentials: 'include'
      }).then(async (res) => {
        const data = await res.json()
        store.commit('accessToken/set', { token: data.accessToken })
        loading.value = false
      })
    }
    return { loading }
  }
})
</script>

<style lang="scss">
@use '../assets/styles/utilities.scss';
@use '../assets/styles/app.scss';
</style>
