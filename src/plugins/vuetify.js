import Vue from "vue";
import i18n from "@/i18n";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const theme = {
  primary: "#4CAF50",
  secondary: "#9C27b0",
  accent: "#9C27b0",
  info: "#00CAE3"
};

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  theme: {
    // dark: false,
    themes: {
      dark: theme,
      light: theme
    }
  },
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    values: {
      product: "mdi-dropbox",
      support: "mdi-lifebuoy",
      steam: "mdi-steam-box",
      pc: "mdi-desktop-classic",
      xbox: "mdi-xbox",
      playstation: "mdi-playstation",
      switch: "mdi-nintendo-switch"
    }
  }
});
