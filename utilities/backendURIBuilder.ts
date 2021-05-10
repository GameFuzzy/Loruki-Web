/**
 * Builds a URI for connecting to the backend
 * @param GraphQL Use the GraphQL path
 * @param https Use https
 */
export default (GraphQL: boolean = true, https: boolean = false) => {
  return `${https ? 'https://' : 'http://'}${process.env.BACKEND_HOSTNAME}:${
    process.env.BACKEND_PORT
  }${GraphQL ? process.env.BACKEND_PATH_GRAPHQL : ''}`
}
