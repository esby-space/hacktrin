/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#4F72E3",
                secondary: "#F8D849",
            },
            fontFamily: {
                sans: ["Source Sans Pro"],
                pixel: ["'Press Start 2P'"],
            },
        },
    },
    plugins: [],
};
