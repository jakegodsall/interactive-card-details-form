/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.js'],
    theme: {
        colors: {
            'light-grey-violet': 'hsl(270, 3%, 87%)',
            'dark-grey-violet': 'hsl(279, 6%, 55%)',
            'very-dark-violet': 'hsl(278, 68%, 11%)',
            'error-red': 'hsl(0, 100%, 66%)',
            'linear-gradient1': 'hsl(249, 99%, 64%)',
            'linear-gradient2': '(278, 94%, 30%)',
        },
        extend: {
            fontFamily: {
                'default-font': ['Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                cardFront: "url('/images/bg-card-front.png')",
                cardBack: "url('/images/bg-card-back.png')",
            },
        },
    },
};
