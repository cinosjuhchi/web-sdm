/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            biru: "#00BBF8",
            birutua: "#0087B2",
            jingga: "#FFAB00",
            hitam: "#161616",
            putih300: "#F4F4F4",
        },

        fontFamily: {
            jakarta: ["Plus Jakarta Sans", "sans-serif"],
        },

        extend: {},
    },
    plugins: [],
});
