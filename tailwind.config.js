module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                whitesmoke: '#f3f5f9'
            },
            flex: {
                full: '1 1 100%'
            },
            spacing: {
                '144': '36rem',
            }
        },
        container: {
			screens: {
				sm: '100%',
				md: '100%',
				lg: '1080px',
				xl: '1080px',
			},
            center: true
		},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
