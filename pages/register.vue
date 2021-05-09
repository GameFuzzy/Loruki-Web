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
import { defineComponent, ssrRef, useRouter } from '@nuxtjs/composition-api'
import { useRegisterUserMutation } from '~/generated/graphql'

export default defineComponent({
  setup() {
    const router = useRouter()
    const username = ssrRef('')
    const password = ssrRef('')

    const { mutate } = useRegisterUserMutation({})

    const register = async (e: any) => {
      e.preventDefault()

      await mutate({
        options: {
          username: username.value,
          password: username.value
        }
      })
      router.push('/')
    }

    return { username, password, register }
  }
})
</script>

<style scoped></style>
