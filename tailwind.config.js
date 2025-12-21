/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4C8BF4',
                secondary: '#424242',
                accent: '#82B1FF',
                success: '#4CAF50',
                warning: '#FFC107',
                error: '#FF5252',
                info: '#2196F3',
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
