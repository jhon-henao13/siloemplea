import { useState } from 'react';

export default function UserProfileModal({ isOpen, onClose, user, onUpgradeToPremium }) {
  const [resumeName, setResumeName] = useState(null);
  const [simulatedInterview, setSimulatedInterview] = useState(false);
  const [score, setScore] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-surface w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-text-muted hover:text-primary">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center font-black text-xl">
            👤
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary">{user?.email}</h3>
            <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded ${user?.isPremium ? 'bg-amber-500 text-white' : 'bg-slate-100 text-text-muted'}`}>
              Cuenta {user?.isPremium ? 'Premium Activa' : 'Básica'}
            </span>
          </div>
        </div>

        {/* Sección de Hoja de Vida */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 mb-6">
          <h4 className="text-sm font-bold text-primary mb-1">Mi Hoja de Vida (PDF)</h4>
          <p className="text-xs text-text-muted mb-3">Súbela para enviarla automáticamente al aplicar por WhatsApp.</p>
          
          <label className="flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl p-4 bg-surface hover:border-primary cursor-pointer transition-colors text-center">
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="sr-only" />
            <span className="text-xs font-medium text-text-main">
              {resumeName ? `📄 ${resumeName}` : 'Toca aquí para seleccionar tu archivo'}
            </span>
          </label>
        </div>

        {/* MÓDULO DE VALOR PREMIUM (Solicitado por Mariana) */}
        <div className="border-t border-slate-100 pt-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-bold text-primary flex items-center gap-1.5">
              <span>🚀</span> Preparación y Orientación Laboral
            </h4>
            {!user?.isPremium && (
              <span className="text-[10px] bg-amber-500 text-white font-extrabold px-2 py-0.5 rounded uppercase">Premium</span>
            )}
          </div>

          {user?.isPremium ? (
            <div className="space-y-4">
              <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
                <p className="font-bold mb-1">💡 Tips Clave para tu Hoja de Vida:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Pon tu dirección clara si vives en la Comuna 20 para locales que buscan cercanía.</li>
                  <li>Usa un título claro: ej. "Auxiliar de Cocina con 2 años de experiencia".</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-surface">
                <h5 className="text-xs font-bold text-primary mb-1">Simulador de Entrevistas Práctico</h5>
                <p className="text-xs text-text-muted mb-3">Practica la respuesta a la pregunta más común de los negocios del barrio.</p>
                
                {!simulatedInterview ? (
                  <button 
                    onClick={() => setSimulatedInterview(true)}
                    className="bg-accent hover:bg-accent-hover text-primary font-bold text-xs py-2 px-4 rounded-lg transition-all"
                  >
                    Iniciar Pregunta de Práctica
                  </button>
                ) : (
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-semibold text-primary italic bg-slate-50 p-2.5 rounded border border-slate-100">
                      "¿Qué harías si un fin de semana se llena demasiado el local y el ambiente se pone estresante?"
                    </p>
                    <div className="flex gap-2">
                      <button onClick={() => setScore('¡Excelente! Mantener la calma y apoyar al equipo es lo que busca el dueño.')} className="bg-slate-100 hover:bg-slate-200 p-2 rounded text-[11px] font-medium flex-1">Responder calmadamente</button>
                      <button onClick={() => setScore('Cuidado, un negocio local necesita resolución proactiva inmediata.')} className="bg-slate-100 hover:bg-slate-200 p-2 rounded text-[11px] font-medium flex-1">Pedir instrucciones fijas</button>
                    </div>
                    {score && <p className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded mt-2">{score}</p>}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 bg-amber-50/40 rounded-xl border border-amber-200/60 px-4">
              <p className="text-xs text-amber-900 font-medium mb-3">
                Desbloquea el módulo premium para recibir orientación estructurada sobre armado de Hojas de Vida eficientes y simulacros interactivos de entrevistas de trabajo.
              </p>
              <button 
                onClick={onUpgradeToPremium}
                className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2.5 px-6 rounded-xl shadow-sm transition-all active:scale-95"
              >
                Activar Acceso Premium
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}