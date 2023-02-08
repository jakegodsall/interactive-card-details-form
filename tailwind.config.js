/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            'light-grey-violet': 'hsl(270, 3%, 87%)',
            'dark-grey-violet': 'hsl(279, 6%, 55%)',
            'very-dark-violet': 'hsl(278, 68%, 11%)',
            'error-red': 'hsl(0, 100%, 66%)',
        },
        extend: {
            fontFamily: {
                'default-font': ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
