import { useRegisterSW } from 'virtual:pwa-register/react';

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW registrado con éxito');
    },
    onRegisterError(error) {
      console.error('Error al registrar el SW:', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!offlineReady && !needRefresh) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-primary text-surface p-4 rounded-xl shadow-xl border border-slate-700 animate-slide-in mx-4">
      <div className="mb-2 text-sm font-medium">
        {offlineReady ? (
          <span>¡Siloemplea está lista para usarse sin internet!</span>
        ) : (
          <span>Hay una nueva actualización disponible en el barrio.</span>
        )}
      </div>
      <div className="flex justify-end gap-2 text-xs">
        {needRefresh && (
          <button
            onClick={() => updateServiceWorker(true)}
            className="bg-accent text-primary px-3 py-1.5 rounded-lg font-bold"
          >
            Actualizar
          </button>
        )}
        <button
          onClick={close}
          className="border border-slate-500 px-3 py-1.5 rounded-lg opacity-80 hover:opacity-100"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}