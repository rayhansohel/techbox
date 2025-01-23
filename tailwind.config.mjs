/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#FAFAFA",
          secondary: "#FFFFFF",
          accent: "#9002F1",
          neutral: "#52525B",
          "base-100": "#010409",
          "base-200": "#0D1117",
          "base-300": "#151B23",
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f97316",
          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("tailwindcss-animate"), require('daisyui'),],
};
