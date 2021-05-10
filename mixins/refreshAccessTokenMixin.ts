import { setAccessToken } from '~/auth'
import backendPathBuilder from '~/utilities/backendURIBuilder'

export default {
  mounted() {
    this.$http
      .$post(
        `${backendPathBuilder(false)}/refresh_token`,
        {},
        { withCredentials: true }
      )
      .then((x: any) => {
        setAccessToken(x.accessToken)
      })
  }
}
