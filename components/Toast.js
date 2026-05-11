import { useState } from 'react';
import styles from './Toast.module.css';

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const toast = (msg, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  };
  return { toasts, toast };
}

export function ToastContainer({ toasts }) {
  return (
    <div className={styles.container}>
      {toasts.map((t) => (
        <div key={t.id} className={`${styles.toast} ${styles[t.type]}`}>
          {t.type === 'success' && '✓ '}
          {t.type === 'error' && '✕ '}
          {t.type === 'info' && '● '}
          {t.msg}
        </div>
      ))}
    </div>
  );
}
