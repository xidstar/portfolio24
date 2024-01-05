const { BgColor } = require("./src/config/helpers")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'intro-top': '#3498db',
        'intro-bottom': '#2ecc71',
      }
    },
  },
  plugins: [],
};

