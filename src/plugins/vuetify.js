import Vue from "vue";
import i18n from "@/i18n";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const theme = {
  primary: "#4CAF50",
  secondary: "#9C27b0",
  accent: "#9C27b0",
  info: "#00CAE3"
};

const darkthemes = {
  primary: colors.red.darken1, // #E53935
  secondary: colors.red.lighten4, // #FFCDD2
  accent: colors.indigo.base // #3F51B5
};

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  theme: {
    // dark: false,
    themes: {
      dark: darkthemes,
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
  },
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280
    },
    scrollBarWidth: 24
  }
});
