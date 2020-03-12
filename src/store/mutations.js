// https://vuex.vuejs.org/en/mutations.html
import router from '@/router';

export default {
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  },
  setBG(state, id) {
    state.imageID = id || 1;
  },
  SET_BAR_IMAGE(state, payload) {
    state.barImage = payload
  },
  SET_DRAWER(state, payload) {
    state.drawer = payload
  },
  LOGIN_FAILED() {
    router.push('/login')
  },
  LOGOUT_SUCCESS(state) {
    state.token = '';
    state.user = null;
    return router.push('/login');
  },
}
