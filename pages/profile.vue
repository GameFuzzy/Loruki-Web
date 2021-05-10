<template>
  <div id="Bye">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>{{ profile }}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useResult } from '@vue/apollo-composable/dist'
import { useByeQuery } from '@/generated/graphql'

export default defineComponent({
  setup() {
    const { result, loading, error } = useByeQuery({
      fetchPolicy: 'network-only'
    })
    const profile = useResult(result, null, (data) => data.bye)

    return { profile, loading, error }
  }
})
</script>

<style scoped></style>
