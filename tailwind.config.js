/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blanco predominante implícito en clases como bg-white
        surface: {
          DEFAULT: '#FFFFFF',
          50: '#F8FAFC', // Gris súper sutil para diferenciar secciones sin romper la limpieza
        },
        primary: {
          // Azul Oscuro: Profesionalismo, textos principales, headers
          DEFAULT: '#0F172A', // Slate 900
          light: '#1E293B',   // Slate 800 para hover
        },
        accent: {
          // Verde con tonalidad amarilla: Esperanza, energía local, botones de acción principal
          DEFAULT: '#A3E635', // Lime 400 de Tailwind (Vibrante)
          hover: '#84CC16',   // Lime 500 para interacciones
          dark: '#65A30D',    // Lime 600 para bordes o textos sobre fondos claros
        },
        text: {
          main: '#0F172A',    // Para títulos
          muted: '#64748B',   // Para descripciones y textos secundarios (Slate 500)
        }
      },
      fontFamily: {
        // Te sugiero Inter para una lectura óptima en móviles (UI Premium)
        sans: ['Inter', 'system-ui', 'sans-serif'], 
      },
      boxShadow: {
        // Sombras suaves para tarjetas, dando aspecto de app moderna
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}