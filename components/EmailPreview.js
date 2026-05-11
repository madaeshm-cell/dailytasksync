import { useState } from 'react';
import styles from './EmailPreview.module.css';

export default function EmailPreview({ text, loading, label = 'Generated Email', onToast }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!text || loading) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onToast('Copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      onToast('Copy failed — select text manually', 'error');
    }
  }

  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <button className={styles.copyBtn} onClick={handleCopy} disabled={loading || !text}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <div className={styles.body}>
        {loading ? <span className={styles.loading}>Generating email</span> : <pre className={styles.text}>{text}</pre>}
      </div>
    </div>
  );
}
