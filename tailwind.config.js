/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      fontSize: {
        xxxs:'.75rem', //12px
        xxs: "1rem", // 16px
        xs: "1.13rem", // 18px
        sm: "1.25rem", // 20px
        base: "1.5rem", //24px
        lg: "2.13rem", // 34px
        xl: "3.88rem", // 62px
      },
      borderRadius: {
        40: "40px",
      },
    },
    plugins: [],
  },
};
