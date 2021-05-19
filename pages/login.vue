<template>
  <div id="Login">
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-form card">
          <h2>Sign in to your account</h2>
          <form @submit="login">
            <div class="form-control">
              <label>
                <input
                  v-model="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
              </label>
            </div>
            <div class="form-control">
              <label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </label>
            </div>
            <input type="submit" value="Login" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useRouter,
  useStore
} from '@nuxtjs/composition-api'
import { useLoginUserMutation, MeDocument } from '~/generated/graphql'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const username = ref('')
    const password = ref('')

    const { mutate } = useLoginUserMutation({
      update: (store, { data }) => {
        if (!data) {
          return null
        }
        store.writeQuery({
          query: MeDocument,
          data: {
            me: data.loginUser.user
          }
        })
      }
    })

    const login = async (e: any) => {
      e.preventDefault()

      const response = await mutate({
        options: {
          username: username.value,
          password: username.value
        }
      })

      if (response && response.data) {
        store.commit('accessToken/set', {
          token: response.data.loginUser.accessToken
        })
      }

      router.push('/')
    }

    return { username, password, login }
  }
})
</script>

<style scoped></style>
