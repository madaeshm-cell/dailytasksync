import { useState } from 'react';
import { callGemini, buildSingleTaskPrompt } from '../lib/gemini';
import { getApiKey, getConfig } from '../lib/storage';
import EmailPreview from './EmailPreview';
import styles from './AddTaskPanel.module.css';

const STATUSES = [
  { label: '✓ Done', value: 'Done', color: 'green' },
  { label: '⏳ In Progress', value: 'In Progress', color: 'yellow' },
  { label: '● Pending', value: 'Pending', color: 'red' },
];

export default function AddTaskPanel({ onAddTask, onToast }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('Done');
  const [emailText, setEmailText] = useState('');
  const [loading, setLoading] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  function handleAdd() {
    if (!name.trim()) { onToast('Task name is required', 'error'); return; }
    onAddTask({ name: name.trim(), desc: desc.trim(), status });
    setName(''); setDesc(''); setStatus('Done');
    setShowEmail(false); setEmailText('');
  }

  async function handleGenerateEmail() {
    if (!name.trim()) { onToast('Enter a task name first', 'error'); return; }
    const apiKey = getApiKey();
    if (!apiKey) { onToast('Save your Gemini API key first', 'error'); return; }
    setLoading(true); setShowEmail(true); setEmailText('');
    try {
      const result = await callGemini(buildSingleTaskPrompt({ name: name.trim(), desc: desc.trim(), status }, getConfig()), apiKey);
      setEmailText(result);
      onToast('Email generated!', 'success');
    } catch (e) {
      setEmailText(`Error: ${e.message}`);
      onToast(e.message, 'error');
    } finally { setLoading(false); }
  }

  function handleClear() {
    setName(''); setDesc(''); setStatus('Done');
    setShowEmail(false); setEmailText('');
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>Add Task</span>
        <button className={styles.clearBtn} onClick={handleClear}>Clear</button>
      </div>
      <div className={styles.body}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Task Name</label>
          <input type="text" className={styles.input} placeholder="Fix login bug, Write report..." value={name}
            onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAdd()} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Description / Notes</label>
          <textarea className={styles.textarea} placeholder="Details about what was done..." value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Status</label>
          <div className={styles.statusBtns}>
            {STATUSES.map((s) => (
              <button key={s.value} className={`${styles.statusBtn} ${status === s.value ? styles[`active_${s.color}`] : ''}`} onClick={() => setStatus(s.value)}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleAdd}>＋ Add Task</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleGenerateEmail} disabled={loading}>
            {loading ? '⏳ Generating...' : '✉ Generate Email'}
          </button>
        </div>
        {showEmail && <EmailPreview text={emailText} loading={loading} label="Task Email" onToast={onToast} />}
      </div>
    </div>
  );
}
