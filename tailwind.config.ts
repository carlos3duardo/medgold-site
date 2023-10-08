import type { Config } from 'tailwindcss';
import { type PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f8fc',
          100: '#e6f0f8',
          200: '#c7e0f0',
          300: '#95c8e4',
          400: '#5caad4',
          500: '#378fc0',
          600: '#2b7fb3',
          700: '#215c83',
          800: '#1f4f6d',
          900: '#1e425c',
          950: '#142b3d',
        },
        secondary: {
          50: '#f1fde8',
          100: '#e1f9ce',
          200: '#c4f4a2',
          300: '#9fea6c',
          400: '#78db39',
          500: '#5cc220',
          600: '#459b15',
          700: '#357615',
          800: '#2d5e16',
          900: '#294f18',
          950: '#112c07',
        },
      },
      backgroundImage: {},
      keyframes: {
        shine: {
          to: { backgroundPosition: 'right -40px top 0' },
        },
        backgroundTelemedicina: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '1',
            borderRadius: '0',
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: '0',
            borderRadius: '50%',
          },
        },
      },
      animation: {
        shine: 'shine 1s ease infinite',
        backgroundTelemedicina: 'backgroundTelemedicina 25s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      function extractColorVars(
        colorObj: Record<string, string>,
        colorGroup = '',
      ) {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars: Record<string, string> =
            typeof value === 'string'
              ? { [`--tw-color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
export default config;
