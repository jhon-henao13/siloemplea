export default function Hero({ onBusinessClick }) {
  return (
    <div className="bg-surface-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
          <span className="block">Trabajo de confianza,</span>
          <span className="block text-accent-dark mt-1">sin salir de Siloé</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-text-muted">
          Conectamos el talento de la Comuna 20 con los negocios de nuestro barrio. Sin papeleos complicados, rápido y directo por WhatsApp.
        </p>
        
        <div className="mt-10 sm:flex sm:justify-center gap-4">
          <div className="rounded-md shadow">
            <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary bg-accent hover:bg-accent-hover md:py-4 md:text-lg transition-colors">
              Buscar Trabajo
            </button>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0">
            <button onClick={onBusinessClick} className="w-full flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-lg text-primary bg-transparent hover:bg-primary hover:text-surface md:py-4 md:text-lg transition-colors">
              Soy un Negocio
            </button>
          </div>
        </div>

        {/* Indicador de confianza social */}
        <div className="mt-8 flex justify-center items-center space-x-2 text-sm text-text-muted">
          <svg className="h-5 w-5 text-accent-dark" fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Más de 50 negocios locales verificados</span>
        </div>
      </div>
    </div>
  );
}