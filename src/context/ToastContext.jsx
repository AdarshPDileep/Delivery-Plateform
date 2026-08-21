import React, { createContext, useContext, useState, useEffect } from 'react';

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success', duration = 3000) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    
    if (duration) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className={`animate-in slide-in-from-bottom-5 fade-in duration-300 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg border text-sm font-medium
              ${toast.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 
                toast.type === 'error' ? 'bg-red-50 text-red-800 border-red-200' : 
                'bg-white text-slate-800 border-slate-200'}`}
          >
            {toast.message}
            <button onClick={() => removeToast(toast.id)} className="ml-2 opacity-50 hover:opacity-100">&times;</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
