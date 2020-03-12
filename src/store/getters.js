// https://vuex.vuejs.org/en/getters.html

export default {
  isLogged: state => !!state.token,
}
