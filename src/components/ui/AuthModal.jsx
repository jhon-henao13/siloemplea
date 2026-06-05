import { useState } from 'react';

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulación controlada de Supabase Auth
    setTimeout(() => {
      setLoading(false);
      onAuthSuccess({
        email,
        id: 'usr_' + Date.now(),
        isPremium: email.includes('premium') // Atajo lógico para pruebas locales rápidas
      });
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-surface w-full max-w-sm rounded-2xl shadow-2xl border border-slate-100 p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-text-muted hover:text-primary">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h3 className="text-xl font-bold text-primary mb-1">
          {isSignUp ? 'Crea tu cuenta local' : 'Ingresa a Siloemplea'}
        </h3>
        <p className="text-xs text-text-muted mb-6">Busca trabajo en la Comuna 20 de forma segura.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-text-muted mb-1">Correo Electrónico</label>
            <input 
              type="email" required placeholder="tu-correo@gmail.com" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-text-muted mb-1">Contraseña</label>
            <input 
              type="password" required placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-xl text-sm shadow-md transition-all active:scale-95 mt-2"
          >
            {loading ? 'Procesando acceso...' : isSignUp ? 'Registrarme ahora' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="text-center mt-6 pt-4 border-t border-slate-100">
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-semibold text-text-muted hover:text-primary transition-colors"
          >
            {isSignUp ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate gratis aquí'}
          </button>
        </div>
      </div>
    </div>
  );
}