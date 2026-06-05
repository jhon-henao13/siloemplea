import { useEffect, useState } from 'react';

export default function JobDetailBottomSheet({ job, isOpen, onClose }) {
  const [animate, setAnimate] = useState(false);

  // Manejo del ciclo de vida de la animación para asegurar transiciones suaves al abrir/cerrar
  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-primary/40 backdrop-blur-xs transition-opacity duration-300">
      {/* Backdrop de cierre */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Contenedor de la Hoja Desplegable */}
      <div 
        className={`bg-surface w-full max-w-md rounded-t-2xl shadow-2xl border-t border-slate-100 p-6 z-10 max-h-[85vh] overflow-y-auto transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          animate ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Barra superior indicadora de arrastre (Microinteracción visual) */}
        <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-6" onClick={onClose} />

        {/* Header con Estado de Verificación */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            <span className="inline-block text-xs font-bold text-accent-dark bg-accent/10 px-2.5 py-1 rounded-full mb-2">
              {job.category}
            </span>
            <h2 className="text-2xl font-extrabold text-primary leading-tight">{job.title}</h2>
            <p className="text-base font-semibold text-text-muted mt-1">{job.businessName}</p>
          </div>
          
          {job.isVerified && (
            <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 flex-shrink-0 border border-emerald-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Verificado
            </span>
          )}
        </div>

        <hr className="border-slate-100 my-4" />

        {/* Datos Clave Destacados */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-surface-50 p-3 rounded-xl border border-slate-100">
            <span className="text-xs text-text-muted block">Pago Ofrecido</span>
            <span className="text-sm font-bold text-primary">{job.payment}</span>
          </div>
          <div className="bg-surface-50 p-3 rounded-xl border border-slate-100">
            <span className="text-xs text-text-muted block">Modalidad</span>
            <span className="text-sm font-bold text-primary">{job.modality}</span>
          </div>
        </div>

        {/* Detalles de Ubicación y Requisitos con Enfoque Empático */}
        <div className="space-y-4 mb-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Ubicación exacta en Siloé</h4>
            <p className="text-sm text-text-main flex items-start">
              <svg className="w-4 h-4 text-text-muted mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {job.location}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Sobre la validación del local</h4>
            <p className="text-xs text-text-muted italic bg-slate-50 p-3 rounded-lg border border-dashed border-slate-200">
              {job.isVerified 
                ? `Este negocio ha sido respaldado bajo la modalidad de: "${job.verificationMethod}". Es un entorno comercial seguro reportado por la economía popular de la Comuna 20.`
                : "Este negocio está pendiente por asignación de visita física. Recomendamos mantener el contacto inicial estrictamente por canales públicos."}
            </p>
          </div>
        </div>

        {/* Botón de Acción Principal con Microinteracción Activa */}
        <div className="sticky bottom-0 bg-surface pt-2">
          <a
            href={job.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-accent hover:bg-accent-hover text-primary font-extrabold py-4 px-6 rounded-xl transition-all duration-200 gap-3 text-base shadow-md active:scale-[0.98]"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.79L2 22l5.36-1.16A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.48 0-2.88-.34-4.12-.94l-2.6.56.58-2.52A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Contactar por WhatsApp Directo
          </a>
          <button 
            onClick={onClose}
            className="w-full text-center text-xs text-text-muted font-semibold mt-4 py-2 hover:text-primary transition-colors"
          >
            Volver al listado
          </button>
        </div>

      </div>
    </div>
  );
}