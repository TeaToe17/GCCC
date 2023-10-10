import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        lightred: '#EC3237',
        'lightred-100':'#FF0000',
        lightblue: '#0097D9',
        'lightblue-100': '#0097D9',
      },
      animation:{
        'enlarge':'enlarge 0.4s ease-out forwards',
        'fadeIn':'fadeIn 0.5s forwards'
      },
      keyframes:{
        'enlarge':{
          '0%':{
            transform: 'scale(1)',
          },
          '100%':{
            transform: 'scale(1.1)'
          }
        },
        'fadeIn':{
          '0%':{
            opacity: '0',
          },
          '100%':{
            opacity: '1'
          }
        }
      },
      fontFamily: {
        'clash-display': ['ClashDisplay-Regular','sans'],
        'clash-display-bold': ['ClashDisplay-Semibold', 'sans'],
        'clash-display-medium': ['ClashDisplay-Medium', 'sans'],
        'poppins': ['Poppins', 'sans'],
      }
    },
  },
  plugins: [],
}
export default config
