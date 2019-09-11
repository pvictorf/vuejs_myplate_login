import axios from 'axios'

axios.defaults.baseURL = "https://acessofacilhost.firebaseio.com/"

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
}
