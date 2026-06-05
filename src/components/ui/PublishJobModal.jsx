import { useState } from 'react';

export default function PublishJobModal({ isOpen, onClose, onPublish }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    businessName: '',
    category: 'Alimentos',
    location: '',
    modality: 'Por horas',
    payment: '',
    verificationType: 'foto', // 'nit' o 'foto'
    whatsappNumber: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Estructurar el objeto final simulando el guardado
    const newJob = {
      id: Date.now(),
      ...formData,
      payment: `${formData.payment} COP`,
      isVerified: true, // Por UX, simulamos que entra a verificación exitosa
      verificationMethod: formData.verificationType === 'nit' ? 'NIT Verificado' : 'Foto de local registrada',
      whatsappUrl: `https://wa.me/57${formData.whatsappNumber}?text=Hola,%20estoy%20interesado%20en%20la%20vacante%20de%20${encodeURIComponent(formData.title)}`,
      createdAt: 'Hoy'
    };
    
    onPublish(newJob);
    // Resetear estados
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface w-full max-w-md rounded-2xl shadow-xl border border-slate-100 max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Header del Modal */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-surface sticky top-0 z-10">
          <div>
            <h3 className="text-lg font-bold text-primary">Publicar nueva vacante</h3>
            <p className="text-xs text-text-muted">Paso {step} de 3</p>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-primary p-1">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Indicador de Progreso Visual */}
        <div className="w-full bg-slate-100 h-1">
          <div 
            className="bg-accent-dark h-1 transition-all duration-300" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Formulario */}
        <form onSubmit={step === 3 ? handleSubmit : handleNext} className="p-6 flex-grow flex flex-col justify-between">
          
          {/* PASO 1: Datos de Confianza del Negocio */}
          {step === 1 && (
            <div className="space-y-4 animate-slide-in">
              <div>
                <label className="block text-sm font-bold text-primary mb-1">Nombre del Negocio o Local</label>
                <input 
                  required
                  type="text" 
                  name="businessName"
                  placeholder="Ej. Panadería El Samán"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-1">Ubicación / Sector en la C20</label>
                <input 
                  required
                  type="text" 
                  name="location"
                  placeholder="Ej. Sector La Estrella (frente a la cancha)"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Método de Verificación de Confianza</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`border rounded-xl p-3 flex flex-col items-center cursor-pointer text-center ${formData.verificationType === 'foto' ? 'border-accent-dark bg-accent/10' : 'border-slate-200'}`}>
                    <input type="radio" name="verificationType" value="foto" checked={formData.verificationType === 'foto'} onChange={handleChange} className="sr-only" />
                    <span className="text-sm font-semibold text-primary">Subiré Foto del Local</span>
                    <span className="text-[10px] text-text-muted mt-0.5">Ideal para independientes</span>
                  </label>
                  <label className={`border rounded-xl p-3 flex flex-col items-center cursor-pointer text-center ${formData.verificationType === 'nit' ? 'border-accent-dark bg-accent/10' : 'border-slate-200'}`}>
                    <input type="radio" name="verificationType" value="nit" checked={formData.verificationType === 'nit'} onChange={handleChange} className="sr-only" />
                    <span className="text-sm font-semibold text-primary">Tengo RUT / NIT</span>
                    <span className="text-[10px] text-text-muted mt-0.5">Empresas registradas</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* PASO 2: Información de la Vacante */}
          {step === 2 && (
            <div className="space-y-4 animate-slide-in">
              <div>
                <label className="block text-sm font-bold text-primary mb-1">¿Qué puesto buscas cubrir?</label>
                <input 
                  required
                  type="text" 
                  name="title"
                  placeholder="Ej. Mesero, Ayudante de obra, Estilista"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-1">Categoría del Oficio</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-surface focus:outline-none focus:border-primary"
                >
                  <option value="Alimentos">Alimentos / Restaurantes</option>
                  <option value="Construcción">Construcción / Oficios</option>
                  <option value="Ventas">Ventas / Comercio</option>
                  <option value="Aseo">Aseo / Servicios Domésticos</option>
                  <option value="Transporte">Transporte / Mensajería</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-1">Modalidad de Trabajo</label>
                <select 
                  name="modality"
                  value={formData.modality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-surface focus:outline-none focus:border-primary"
                >
                  <option value="Por horas">Por horas / Días</option>
                  <option value="Obra o labor">Por Obra o Labor</option>
                  <option value="Fijo">Puesto Fijo Mensual</option>
                </select>
              </div>
            </div>
          )}

          {/* PASO 3: Pago y Contacto */}
          {step === 3 && (
            <div className="space-y-4 animate-slide-in">
              <div>
                <label className="block text-sm font-bold text-primary mb-1">¿Cuánto vas a pagar?</label>
                <input 
                  required
                  type="text" 
                  name="payment"
                  placeholder="Ej. 50.000 al día o 1.300.000 al mes"
                  value={formData.payment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-1">Número de WhatsApp para recibir postulaciones</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-sm text-text-muted font-medium">
                    +57
                  </span>
                  <input 
                    required
                    type="tel" 
                    name="whatsappNumber"
                    pattern="[0-9]{10}"
                    placeholder="300 123 4567"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-r-xl text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <p className="text-[11px] text-text-muted mt-1">Los postulantes te tocarán el chat directamente con un mensaje automático.</p>
              </div>
            </div>
          )}

          {/* Botones de Navegación del Formulario */}
          <div className="flex gap-3 mt-8 pt-4 border-t border-slate-100">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="w-1/3 py-3 border-2 border-primary text-primary font-bold rounded-xl text-sm active:scale-95 transition-transform"
              >
                Atrás
              </button>
            )}
            <button
              type="submit"
              className={`py-3 font-bold rounded-xl text-sm active:scale-95 transition-all shadow-sm ${
                step === 3 
                  ? 'w-full bg-accent hover:bg-accent-hover text-primary' 
                  : 'flex-grow bg-primary text-surface hover:bg-primary-light'
              }`}
            >
              {step === 3 ? 'Publicar Ahora' : 'Siguiente'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}