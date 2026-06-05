export default function Footer() {
  return (
    <footer className="bg-primary text-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold">
            Silo<span className="text-accent">emplea</span>
          </span>
          <p className="text-sm mt-2 opacity-80">Impulsando la economía de la Comuna 20.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <a 
            href="https://wa.me/573000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-accent hover:text-accent-hover transition-colors mb-2"
          >
            {/* Icono simple de WhatsApp/Chat */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.79L2 22l5.36-1.16A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.48 0-2.88-.34-4.12-.94l-2.6.56.58-2.52A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Soporte por WhatsApp
          </a>
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Siloemplea. Hecho en Cali.</p>
        </div>
      </div>
    </footer>
  );
}