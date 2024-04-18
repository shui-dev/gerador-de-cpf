/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
      'space': ['Space Mono'],
    },
    extend: {
      keyframes: {
        copied: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            bottom: "192px",
            opacity: "100%",
          }
        }
      }
    },
    animation: {
      "copied": "copied 2s"
    },
  },
  plugins: [],
}