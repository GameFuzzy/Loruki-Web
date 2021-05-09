export default ({ $http }: { $http: any }) => {
  $http._defaults.credentials = 'include'
}
