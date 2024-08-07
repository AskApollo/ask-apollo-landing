const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-brigro)", ...fontFamily.sans],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
          "100%": { opacity: 1, transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
          "45%": {
            transform: "rotate(-4deg)",
          },
          "55%": {
            transform: "rotate(4deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Light & dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: [
      {
          cust: {
            ...require("daisyui/src/theming/themes")["business"],
            primary: "#22d3ee",
            // "accent": "#eeaf3a",
            ".tech-used": { "fill": "white" },
            ".offer": {
              "--tw-text-opacity": "1",
              "color": "var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))",
              "fill": "var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))"
            },
            ".hard-shadow": {
              // "box-shadow": "0px 29px 52px 0px rgba(255,255,255,.3)",
              "box-shadow": "0px 29px 52px 0px rgba(100,100,100,.2),22px 25px 16px 0px rgba(100,100,100,.1)"
            },
            "--rounded-btn": "1.9rem"
          }
        },
      // {
      //   light: {
      //     ...require("daisyui/src/theming/themes")["cupcake"],
      //     primary: "#22d3ee",
      //     ".tech-used": { "fill": "black" },
      //     ".offer": {
      //       "--tw-text-opacity": "1",
      //       "color": "violet",
      //       "fill": "violet"
      //     },
      //     ".hard-shadow": {
      //       "box-shadow": "0px 29px 52px 0px rgba(0,0,0,.4),22px 25px 16px 0px rgba(0,0,0,.2)"
      //     }
      //   }
      // },
      // "dark",
      // {
      //   dark: {
      //     ...require("daisyui/src/theming/themes")["business"],
      //     primary: "#22d3ee",
      //     // "accent": "#eeaf3a",
      //     ".tech-used": { "fill": "white" },
      //     ".offer": {
      //       "--tw-text-opacity": "1",
      //       "color": "var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))",
      //       "fill": "var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))"
      //     },
      //     ".hard-shadow": {
      //       // "box-shadow": "0px 29px 52px 0px rgba(255,255,255,.3)",
      //       "box-shadow": "0px 29px 52px 0px rgba(100,100,100,.2),22px 25px 16px 0px rgba(100,100,100,.1)"
      //     },
      //     "--rounded-btn": "1.9rem"
      //   }
      // },
      // "luxury", 
      // // {winter: {...require("daisyui/src/theming/themes")["winter"], primary: "#22d3ee"}}, 
      // {cupcake: {...require("daisyui/src/theming/themes")["cupcake"], primary: "#22d3ee"}},
      // {coffee: {...require("daisyui/src/theming/themes")["coffee"], primary: "#22d3ee"}},
      // {bumblebee: {...require("daisyui/src/theming/themes")["bumblebee"], primary: "#22d3ee"}},
    ],

  },
};
