import { useState, useEffect } from 'react';
import { getConfig, saveConfig, getApiKey, saveApiKey } from '../lib/storage';
import styles from './ConfigPanel.module.css';

export default function ConfigPanel({ onToast }) {
  const [apiKey, setApiKey] = useState('');
  const [config, setConfig] = useState({
    senderName: '', recipientEmail: '', projectName: '', senderRole: '',
  });

  useEffect(() => {
    setApiKey(getApiKey());
    const cfg = getConfig();
    setConfig({
      senderName: cfg.senderName || '',
      recipientEmail: cfg.recipientEmail || '',
      projectName: cfg.projectName || '',
      senderRole: cfg.senderRole || '',
    });
  }, []);

  function handleSaveKey() {
    if (!apiKey.trim()) { onToast('Enter an API key first', 'error'); return; }
    saveApiKey(apiKey.trim());
    onToast('API key saved!', 'success');
  }

  function handleSaveConfig() {
    saveConfig(config);
    onToast('Configuration saved!', 'success');
  }

  return (
    <div className={styles.wrapper}>
      {/* API Key */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.dot} style={{ background: 'var(--accent2)' }} />
          Gemini API Key — Free at{' '}
          <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className={styles.link}>
            aistudio.google.com
          </a>
        </div>
        <div className={styles.row}>
          <input
            type="password"
            className={styles.input}
            placeholder="AIza... (paste your Gemini API key)"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleSaveKey}>
            Save Key
          </button>
        </div>
      </div>

      {/* Config */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.dot} style={{ background: 'var(--accent3)' }} />
          Email Configuration
        </div>
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="John Doe"
              value={config.senderName}
              onChange={(e) => setConfig({ ...config, senderName: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Recipient Email</label>
            <input
              type="email"
              className={styles.input}
              placeholder="team@company.com"
              value={config.recipientEmail}
              onChange={(e) => setConfig({ ...config, recipientEmail: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Role</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Software Engineer"
              value={config.senderRole}
              onChange={(e) => setConfig({ ...config, senderRole: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Team / Project Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Product Team"
              value={config.projectName}
              onChange={(e) => setConfig({ ...config, projectName: e.target.value })}
            />
          </div>
        </div>
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleSaveConfig}>
          💾 Save Configuration
        </button>
      </div>
    </div>
  );
}
