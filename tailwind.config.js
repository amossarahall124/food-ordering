/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-100": "#03071E",
        "main-500": "#370617",
        "main-700": "#6A040F",
        "main-800": "#9D0208",
        "main-900": "#D00000",
        "main-950": "#DC2F02",
        "second-100": "#E85D04",
        "second-200": "#F48C06",
        "second-300": "#FAA307",
        "second-500": "#FFBA08",
      }

    },
  },
  plugins: [],
}

