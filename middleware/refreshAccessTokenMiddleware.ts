import { setAccessToken } from '~/auth'
import backendPathBuilder from '~/utilities/backendURIBuilder'

export default function (context: any) {
  return new Promise((resolve) => {
    context.$http
      .$post(
        `${backendPathBuilder(false)}/refresh_token`,
        {},
        { withCredentials: true }
      )
      .then((x: any) => {
        setAccessToken(x.accessToken)
        resolve(x)
      })
  })
}
