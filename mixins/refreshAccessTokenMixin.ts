import http from 'http'
import { setAccessToken } from '~/auth'

export default {
  mounted() {
    const req = http.request(
      {
        hostname: 'localhost',
        port: 4000,
        path: '/refresh_token',
        method: 'POST'
      },
      () => {}
    )

    req.on('data', (data) => {
      setAccessToken(data.accessToken)
    })

    req.on('error', (error) => {
      console.error(error)
    })

    req.write('')
    req.end()
  }
}
