// https://vuex.vuejs.org/en/actions.html
import api from '@/services/api.service';
import store from './index'
import router from '@/router'
import { RESPONSE_API } from '@/plugins/constants'
export default {

  // eslint-disable-next-line no-unused-vars
  async login({ commit }, params) {
    try {
      const res = await api.doLogin(params);

      if (res) {
        if (res.data.status === RESPONSE_API.SUCCESS) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          store.commit("setToken", res.data.token);
          store.commit("setUser", res.data.user);
          router.push("/")
        } else if (res.data.status === RESPONSE_API.ERROR) {
          store.commit("LOGIN_FAILED", res.data.message)
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  },
  logout() {
    try {
      console.log("logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      store.commit("LOGOUT_SUCCESS")

    } catch (error) {
      console.log("e", error);

    }
  }
}
