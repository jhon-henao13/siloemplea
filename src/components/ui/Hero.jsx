import logoHero from '../../assets/siloemplea.png';

export default function Hero({ onBusinessClick, onSearchJobClick }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-surface-50 via-white to-surface-50 pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      
      {/* Elementos ambientales de UI Premium (Efecto de luces de fondo fluidas) */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:top-[-64px]">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-100/40 to-accent-soft/30 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Columna Izquierda: Copys y CTAs */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left animate-slide-in">
            
            {/* Tagbadge de Impacto Comunitario */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-soft border border-accent-light text-primary text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-hover opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-hover"></span>
              </span>
              Comuna 20 • Red Local
            </div>

            <h1 className="text-4xl tracking-tight font-black text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
              <span className="block">Trabajo de confianza,</span>
              <span className="block bg-gradient-to-r from-primary via-primary-dark to-accent-hover bg-clip-text text-transparent mt-2">
                sin salir de Siloé
              </span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-text-muted font-normal max-w-xl sm:mx-auto lg:mx-0 leading-relaxed">
              Conectamos el talento de la Comuna 20 con los negocios de nuestro barrio. Sin papeleos complicados, rápido y directo por WhatsApp.
            </p>
            
            {/* Contenedor de Botones de Acción con Microinteracciones Premium */}
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <div className="w-full sm:w-auto">
                
                <button 
                  onClick={onSearchJobClick}
                  className="group relative w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-primary bg-accent hover:bg-accent-hover transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                >
                    
                  {/* Efecto de brillo sutil en hover */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  Buscar Trabajo
                  <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                <button 
                  onClick={onBusinessClick} 
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-primary/20 text-base font-bold rounded-xl text-primary bg-white/60 backdrop-blur-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  Soy un Negocio
                </button>
              </div>
            </div>

            {/* Indicador de confianza social */}
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-3 text-sm text-text-muted font-medium bg-white/40 backdrop-blur-sm inline-flex px-4 py-2 rounded-xl border border-surface-100">
              <div className="flex -space-x-2">
                {/* Avatares abstractos que denotan comunidad */}
                <div className="w-6 h-6 rounded-full bg-primary text-[10px] text-white flex items-center justify-center font-bold ring-2 ring-white">C20</div>
                <div className="w-6 h-6 rounded-full bg-accent text-[10px] text-primary flex items-center justify-center font-bold ring-2 ring-white">✓</div>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-5 w-5 text-accent-hover shrink-0" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Más de <span className="text-primary font-bold">50 negocios</span> locales verificados</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Imagen Ilustrativa de Marca (Oculta en móviles, limpia en Desktop) */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center justify-center">
            <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none animate-fade-in">
              {/* Círculo decorativo posterior */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-2xl transform scale-90 translate-y-4" />
              
              <img
                src={logoHero}
                alt="Siloemplea Comunidad Ilustración"
                className="relative w-full h-auto object-contain max-h-[420px] drop-shadow-[0_10px_25px_rgba(17,92,127,0.12)] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}