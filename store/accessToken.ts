export const state = () => ({
  token: ''
})

export const mutations = {
  set(state, { token }) {
    state.token = token
  }
}
