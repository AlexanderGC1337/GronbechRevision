/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#996633",
          "secondary": "#a6a6a6",
          "accent": "#4b5563",
          "neutral": "#e6ffff",
          "base-100": "#fff",
          "info": "#9ca3af",
          "success": "#00fca6",
          "warning": "#facc15",
          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

