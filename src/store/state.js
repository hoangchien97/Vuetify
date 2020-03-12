// https://vuex.vuejs.org/en/state.html

export default {
  token: localStorage.getItem('token') || '',
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
  barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
  drawer: null,
  msg: {
    message: "",
    isShow: false,
    color: "success"
  }
}
