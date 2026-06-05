import { useState } from 'react';

export default function Navbar({ onPublishClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">
              Silo<span className="text-accent-dark">emplea</span>
            </span>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Buscar Empleo</a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Negocios Locales</a>

            <button onClick={onPublishClick} className="bg-accent hover:bg-accent-hover text-primary font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm">
                Publicar Vacante
            </button>
            
          </div>

          {/* Botón Menú Móvil */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-text-muted focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-surface-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-text-main hover:bg-surface-50 rounded-md">Buscar Empleo</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-text-main hover:bg-surface-50 rounded-md">Negocios Locales</a>

            <button onClick={onPublishClick} className="w-full text-left mt-4 bg-accent text-primary font-semibold px-3 py-3 rounded-md shadow-sm">
                Publicar Vacante
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}