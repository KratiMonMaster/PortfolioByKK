tailwind.config = {
    theme:{
        extend: {
            gridtemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200, 1fr))'
            },
    
            animation:{
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a', 
                darkTheme: '#11001F'
            },
            boxShadow:{
                black: '4px_4px_0_#000',
                white: '4px_4px_0_#fff',
            }

        }
       
    },

    darkMode: 'selector'
}
