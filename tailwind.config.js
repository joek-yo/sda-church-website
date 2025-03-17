/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // SDA blue theme
        secondary: "#FACC15", // Gold accent
        background: "#F8FAFC", // Light gray background
      },
    },
  },
  plugins: [],
};
