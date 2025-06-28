import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx,svelte,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", 'sans-serif'],
      },
      colors: {
        primary: '#1e40af',
        secondary: '#f59e0b',
      },
    },
  },
  plugins: [],
};
