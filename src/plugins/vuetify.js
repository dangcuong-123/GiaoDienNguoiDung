import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#2DA44E",
        secondary: "#F1F8E9",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
		tertiary: "#000000"
      },
      dark: {
        primary: "#424242",
        secondary: "#90A4AE",
        tertiary: "#82B1FF",
        accent: "#26C6DA",
        error: "#f55a4e",
        info: "#00d3ee",
        success: "#5cb860",
        warning: "#ffa21a",
        danger: "#CE93D8",
        general: "#2196F3",
        anchor: "#E0E0E0",
        background: "#757575",
      },
    },
  },
});
