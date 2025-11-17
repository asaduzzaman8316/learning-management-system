/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                "bounce-slow": {
                    "0%, 100%": {
                        transform: "translateY(-12%)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "bounce-slow": "bounce-slow 2.5s ease-in-out infinite",
                "bounce-slower": "bounce-slow 4s ease-in-out infinite",
                "bounce-super-slow": "bounce-slow 6s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}

export default config
