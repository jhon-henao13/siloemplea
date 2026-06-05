export default function JobCard({ job }) {
  return (
    <div className="bg-surface rounded-xl border border-slate-100 shadow-card p-5 flex flex-col justify-between hover:border-accent-dark transition-all duration-300">
      <div>
        {/* Header de la Tarjeta */}
        <div className="flex justify-between items-start gap-2 mb-3">
          <span className="text-xs font-semibold text-text-muted bg-surface-50 px-2.5 py-1 rounded">
            {job.modality}
          </span>
          <span className="text-xs text-text-muted">{job.createdAt}</span>
        </div>

        {/* Título y Negocio */}
        <h3 className="text-lg font-bold text-primary mb-1 leading-snug">
          {job.title}
        </h3>
        
        <div className="flex items-center gap-1.5 mb-4">
          <p className="text-sm font-medium text-text-muted">{job.businessName}</p>
          
          {job.isVerified && (
            <div className="group relative flex items-center">
              {/* Badge de Verificación */}
              <svg className="w-4 h-4 text-accent-dark cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.523.75.75 0 00.333.822l2.452 1.417-1.417 2.452a.75.75 0 00.523.708.75.75 0 00.822-.333l1.417-2.452 2.452 1.417a.75.75 0 00.708-.523.75.75 0 00-.333-.822L9.793 5.234l1.417-2.452a.75.75 0 00-.523-.708.75.75 0 00-.822.333L8.448 4.86 5.996 3.443a.75.75 0 00-.27-.012z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              {/* Tooltip de Confianza */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-primary text-surface text-[10px] py-1 px-2 rounded whitespace-nowrap shadow-md">
                {job.verificationMethod}
              </span>
            </div>
          )}
        </div>

        {/* Detalles Ubicación y Pago */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-text-main">
            <svg className="w-4 h-4 text-text-muted mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </div>
          
          <div className="flex items-center text-sm font-semibold text-primary">
            <svg className="w-4 h-4 text-accent-dark mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {job.payment}
          </div>
        </div>
      </div>

      {/* CTA de Aplicación Directa */}
      <a
        href={job.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center bg-accent hover:bg-accent-hover text-primary font-bold py-3 px-4 rounded-xl transition-all duration-200 gap-2 text-sm shadow-sm active:scale-95"
      >
        Postularme por WhatsApp
      </a>
    </div>
  );
}