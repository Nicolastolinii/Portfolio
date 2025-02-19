/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"]
      },
      container: {
        center: true, 
        padding: '2rem',
        screens: {
          sm: '600px',  // Más pequeño que el predeterminado (640px)
          md: '720px',  // Más pequeño que el predeterminado (768px)
          lg: '960px',  // Más pequeño que el predeterminado (1024px)
          xl: '1140px', // Más pequeño que el predeterminado (1280px)
          '2xl': '1400px', // Más pequeño que el predeterminado (1536px)
        },
      }

    },
  },
  plugins: [],
}

