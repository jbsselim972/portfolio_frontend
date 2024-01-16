/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                black_color: 'var(--black-color)',
                lightgray_color: 'var(--lightgray-color)',
                gray_color: 'var(--gray-color)',
                brown_color: 'var(--brown-color)',
                white_color: 'var(--white-color)',
                // primary: {
                //   DEFAULT: "hsl(var(--primary))",
                //   foreground: "hsl(var(--primary-foreground))",
                // },
                // secondary: {
                //   DEFAULT: "hsl(var(--secondary))",
                //   foreground: "hsl(var(--secondary-foreground))",
                // },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            backgroundImage: {
                bgImg: "url('/src/assets/bgbase.png')",
                bgwhite: "url('/src/assets/bgwhite.png')",
                skill_40: 'conic-gradient(#ff8c42 40%, #ffcdae 0);',
                skill_60: 'conic-gradient(#ff8c42 60%, #ffcdae 0);',
                skill_70: 'conic-gradient(#ff8c42 70%, #ffcdae 0);',
                skill_80: 'conic-gradient(#ff8c42 80%, #ffcdae 0);',
                skill_90: 'conic-gradient(#ff8c42 90%, #ffcdae 0);',
                skill_100: 'conic-gradient(#ff8c42 100%, #ffcdae 0);',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            fontFamily: {
                base: ['DM Sans', 'sans-serif'],
                satoshi: ['Satoshi', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
