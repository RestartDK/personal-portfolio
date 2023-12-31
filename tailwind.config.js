/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sanddollar': {
          50: "#FFFEFD",
          100: "#FEFDFC",
          200: "#FDFBF7",
          300: "#FBF8F1",
          400: "#F9F2E7",
          500: "#F6EDDD",
          600: "#DDD5C7",
          700: "#948E85",
          800: "#6F6B63",
          900: "#4A4742",
        },
        'tan': {
          50: "#FCFBF9",
          100: "#FAF7F4",
          200: "#F2EBE2",
          300: "#EADED1",
          400: "#DAC6AF",
          500: "#CAAD8C",
          600: "#B69C7E",
          700: "#796854",
          800: "#5B4E3F",
          900: "#3D342A",
        },
        'brown': {
          50: "#F7F5F4",
          100: "#EFEBE8",
          200: "#D8CEC6",
          300: "#C0B1A4",
          400: "#917660",
          500: "#623B1C",
          600: "#583519",
          700: "#3B2311",
          800: "#2C1B0D",
          900: "#1D1208",
        },
        'carafe': {
          50: "#F6F4F3",
          100: "#EDE9E7",
          200: "#D2C9C2",
          300: "#B6A89D",
          400: "#806754",
          500: "#49260A",
          600: "#422209",
          700: "#2C1706",
          800: "#211105",
          900: "#160B03",
        }
      },
    },
    fontFamily: {
      kanit: "Kanit",
      quicksand: "Quicksand",
      ysabeau: "Ysabeau Office",
    },
  },
  plugins: [],
}