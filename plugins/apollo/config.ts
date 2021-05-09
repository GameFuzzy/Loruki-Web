import { getAccessToken, setAccessToken } from '~/auth'
import { ApolloLink, Observable } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode, { JwtPayload } from 'jwt-decode'

export default (context: any) => {
  const cache = new InMemoryCache({})

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle: any
        Promise.resolve(operation)
          .then((operation) => {
            const accessToken = getAccessToken()
            if (accessToken) {
              operation.setContext({
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
              })
            }
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer)
            })
          })
          .catch(observer.error.bind(observer))

        return () => {
          if (handle) handle.unsubscribe()
        }
      })
  )

  return {
    httpEndpoint: 'http://localhost:4000/graphql',
    defaultHttpLink: false,
    link: ApolloLink.from([
      // @ts-ignore
      new TokenRefreshLink({
        accessTokenField: 'accessToken',
        isTokenValidOrUndefined: () => {
          const token = getAccessToken()

          if (!token) {
            return true
          }

          try {
            const { exp } = jwtDecode<JwtPayload>(token)
            if (Date.now() >= exp! * 1000) {
              return false
            } else {
              return true
            }
          } catch {
            return false
          }
        },
        fetchAccessToken: () => {
          return fetch('http://localhost:4000/refresh_token', {
            method: 'POST',
            credentials: 'include'
          })
        },
        handleFetch: (accessToken) => {
          setAccessToken(accessToken)
        },
        handleError: (err) => {
          console.warn('Your refresh token was invalid. Try to re-login')
          console.log(err)
        }
      }),
      onError(({ graphQLErrors, networkError }) => {
        console.log(graphQLErrors)
        console.log(networkError)
      }),
      requestLink,
      new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'include'
      })
    ]),
    cache
  }
}
