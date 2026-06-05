import { useState } from 'react';

export default function MapPremiumModal({ isOpen, onClose }) {
  const [selectedShop, setSelectedShop] = useState(null);

  if (!isOpen) return null;

  // Ubicaciones georreferenciadas mapeadas a la economía popular de Cali
  const MAP_MARKERS = [
    { id: 1, name: 'Panadería El Samán C20', type: 'Panadería', lat: '3.425', lng: '-76.551', address: 'Sector La Estrella', phone: '3157778899', photo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Variedades Camila', type: 'Miscelánea', lat: '3.423', lng: '-76.554', address: 'Sector Pueblo Joven', phone: '3002221144', photo: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Sabor Siloé Restaurante', type: 'Panadería', lat: '3.427', lng: '-76.549', address: 'Frente a Estación MIO Cable', phone: '3124445566', photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-surface w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-100 h-[85vh] flex flex-col md:flex-row overflow-hidden">
        
        {/* Contenedor del Mapa Geográfico Virtualizado */}
        <div className="flex-grow bg-slate-100 relative min-h-[300px] md:min-h-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
          
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-2 rounded-xl shadow-md z-10">
            📍 Buscador de Mapa: Cali, Comuna 20
          </div>

          <button onClick={onClose} className="absolute top-4 right-4 bg-surface text-primary p-2 rounded-full shadow-md z-10 md:hidden">
            ✕
          </button>

          {/* Marcadores Rojos interactivos solicitados por Mariana */}
          {MAP_MARKERS.map(marker => (
            <button
              key={marker.id}
              onClick={() => setSelectedShop(marker)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all"
              style={{ top: `${(parseFloat(marker.lat) - 3.42) * 8000}%`, left: `${(parseFloat(marker.lng) + 76.56) * 6000}%` }}
            >
              <div className="w-4 h-4 bg-rose-600 rounded-full border-2 border-white shadow-md animate-bounce group-hover:scale-125" />
              <span className="absolute left-5 top-0 bg-surface text-[10px] font-bold text-primary px-1.5 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {marker.name}
              </span>
            </button>
          ))}

          <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-xs rounded-xl p-3 border border-slate-200 text-[11px] text-text-muted">
            ℹ️ Toca los **puntos rojos** en el mapa para validar las fotos del local físico y acceder a contacto directo de seguridad.
          </div>
        </div>

        {/* Panel lateral de Detalles de Confianza y Llamadas */}
        <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-100 bg-surface flex flex-col justify-between p-5">
          <div className="hidden md:flex justify-end mb-2">
            <button onClick={onClose} className="text-text-muted hover:text-primary font-bold text-sm">Cerrar mapa</button>
          </div>

          {selectedShop ? (
            <div className="flex-grow flex flex-col justify-between animate-fade-in">
              <div>
                <img 
                  src={selectedShop.photo} 
                  alt={selectedShop.name} 
                  className="w-full h-36 object-cover rounded-xl border border-slate-100 shadow-sm mb-3"
                />
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                  {selectedShop.type}
                </span>
                <h4 className="text-lg font-bold text-primary mt-1.5 leading-snug">{selectedShop.name}</h4>
                <p className="text-xs text-text-muted mt-1">📍 Sector: {selectedShop.address}</p>
              </div>

              <div className="space-y-2 mt-6">
                <a 
                  href={`tel:${selectedShop.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-sm"
                >
                  📞 Llamar Directo ({selectedShop.phone})
                </a>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center text-center text-xs text-text-muted px-4">
              Selecciona un negocio marcado en rojo en la cuadrícula de Cali para inspeccionar su infraestructura física de forma segura.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}