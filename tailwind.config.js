/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FFFFFF',
          // Reemplazamos el gris Slate por el fondo premium extraído de tu logo (azul súper sutil)
          50: '#f2fafb', 
          // Tonos secundarios suaves para bordes o fondos alternos basados en tu paleta
          100: '#c1e7ec',
          200: '#95cdd1',
        },
        primary: {
          // Tu azul oscuro del logo: Da profesionalismo y fuerza visual
          DEFAULT: '#115c7f', 
          // Una variante más oscura del mismo tono para hovers o textos ultra-importantes
          dark: '#0a3d55',   
        },
        accent: {
          // El verde con tonalidad amarilla sutil extraído del logo
          DEFAULT: '#93d334', 
          // El verde más vivo de tu paleta para interacciones/hovers exitosos
          hover: '#50c76a',   
          // Tonos claros de tu paleta ideales para fondos de alertas o contenedores suaves
          light: '#c3e99d',
          soft: '#def8ca',
        },
        text: {
          // El color principal de lectura ahora hereda la sobriedad de tu azul de marca
          main: '#115c7f',    
          // Un gris azulado intermedio para descripciones secundarias
          muted: '#527a8c',   
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], 
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        // Corregido: Se cambió 'ease-out-quad' por 'ease-out' ya que Tailwind nativo no incluye -quad por defecto en strings directos de animación
        'fade-in': 'fade-in 0.2s ease-out forwards',
        'slide-up': 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in': 'slide-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(17, 92, 127, 0.04), 0 2px 4px -1px rgba(17, 92, 127, 0.02)',
      }
    },
  },
  plugins: [],
}