import { setAccessToken } from '~/auth'

export default function (context: any) {
  return new Promise((resolve) => {
    context.$http
      .$post(
        'http://localhost:4000/refresh_token',
        {},
        { withCredentials: true }
      )
      .then((x: any) => {
        setAccessToken(x.accessToken)
        resolve(x)
      })
  })
}
