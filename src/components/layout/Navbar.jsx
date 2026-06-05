import { useState } from 'react';

export default function Navbar({ onPublishClick, onAuthClick, onMapClick, onProfileClick, user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface shadow-card sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary tracking-tight">
              Silo<span className="text-accent-dark">emplea</span>
            </span>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button 
              onClick={onMapClick} 
              className="flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors font-semibold text-sm bg-slate-50 px-3 py-2 rounded-xl border border-slate-100"
            >
              <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Mapa de Vacantes <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.5 rounded-full uppercase font-bold">Premium</span>
            </button>

            <button onClick={onPublishClick} className="bg-primary hover:bg-primary-light text-white text-sm font-bold py-2.5 px-5 rounded-xl transition-all shadow-sm">
              Publicar Vacante
            </button>

            <div className="h-6 w-[1px] bg-slate-200" />

            {user ? (
              <button 
                onClick={onProfileClick}
                className="flex items-center gap-2 bg-surface hover:bg-slate-50 border border-slate-200 p-1.5 rounded-xl transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-accent text-primary font-bold flex items-center justify-center text-xs">
                  {user.email.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-primary max-w-[100px] truncate">{user.email}</span>
                {user.isPremium && <span className="text-amber-500 text-xs">★</span>}
              </button>
            ) : (
              <button 
                onClick={onAuthClick}
                className="border-2 border-primary text-primary font-bold text-sm py-2 px-5 rounded-xl hover:bg-primary hover:text-white transition-all"
              >
                Ingresar / Registrarme
              </button>
            )}
          </div>

          {/* Botón Menú Móvil */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-text-muted focus:outline-none p-2"
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
        <div className="md:hidden bg-surface border-t border-slate-100 p-4 space-y-3 shadow-xl">
          <button 
            onClick={() => { onMapClick(); setIsOpen(false); }} 
            className="w-full flex items-center justify-center gap-2 text-primary bg-amber-500/10 border border-amber-500/20 py-3 rounded-xl font-bold text-sm"
          >
            🗺️ Ver Mapa de Vacantes Premium
          </button>
          
          <button 
            onClick={() => { onPublishClick(); setIsOpen(false); }} 
            className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-sm text-sm"
          >
            Publicar Vacante
          </button>

          {user ? (
            <button 
              onClick={() => { onProfileClick(); setIsOpen(false); }}
              className="w-full flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-xl font-bold text-sm bg-slate-50"
            >
              👤 Mi Perfil ({user.isPremium ? 'Premium' : 'Básico'})
            </button>
          ) : (
            <button 
              onClick={() => { onAuthClick(); setIsOpen(false); }}
              className="w-full border-2 border-primary text-primary font-bold py-3 rounded-xl text-sm text-center block"
            >
              Ingresar / Registrarme
            </button>
          )}
        </div>
      )}
    </nav>
  );
}