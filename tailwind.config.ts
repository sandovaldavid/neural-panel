import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            discord: {
                primary: '#5865F2',
                success: '#57F287',
                danger: '#ED4245',
                dark: '#36393F',
                darker: '#202225',
                light: '#FFFFFF',
                accent: '#99AAB5',
                neon: '#00fff5',
                purple: '#9B6DFF',
                darkBlue: '#1a1c2c',
            },
        },
    },
    plugins: [],
} satisfies Config;
