<template>
  <div id="Register">
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-form card">
          <h2>Register an account</h2>
          <form @submit="register">
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
            <input type="submit" value="Register" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ssrRef,
  useRouter,
  useStore
} from '@nuxtjs/composition-api'
import { MeDocument, useRegisterUserMutation } from '~/generated/graphql'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const username = ssrRef('')
    const password = ssrRef('')

    const { mutate } = useRegisterUserMutation({
      update: (store, { data }) => {
        if (!data) {
          return null
        }
        store.writeQuery({
          query: MeDocument,
          data: {
            me: data.registerUser.user
          }
        })
      }
    })

    const register = async (e: any) => {
      e.preventDefault()
      try {
        const response = await mutate({
          options: {
            username: username.value,
            password: password.value
          }
        })

        if (response && response.data) {
          store.commit('accessToken/set', {
            token: response.data.registerUser.accessToken
          })
        }
        router.push('/')
      } catch (e) {
        console.error(e.message)
      }
    }

    return { username, password, register }
  }
})
</script>

<style scoped></style>
