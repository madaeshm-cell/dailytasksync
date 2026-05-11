.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
}

.title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--muted2);
}

.clearBtn {
  padding: 5px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted2);
  font-size: 11px;
  font-weight: 600;
  transition: all 0.15s;
}
.clearBtn:hover { border-color: var(--accent3); color: var(--accent3); }

.body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.formGroup { display: flex; flex-direction: column; gap: 6px; }

.label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--muted2);
}

.input, .textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  color: var(--text);
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}
.input:focus, .textarea:focus { border-color: var(--accent2); }
.input::placeholder, .textarea::placeholder { color: var(--muted2); }
.textarea { resize: vertical; min-height: 72px; }

.statusBtns {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.statusBtn {
  padding: 5px 14px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted2);
  font-size: 11px;
  font-weight: 700;
  transition: all 0.15s;
  letter-spacing: 0.3px;
}

.active_green { border-color: var(--accent) !important; color: var(--accent) !important; background: rgba(127,255,110,0.08) !important; }
.active_yellow { border-color: #ffdd6e !important; color: #ffdd6e !important; background: rgba(255,221,110,0.08) !important; }
.active_red { border-color: var(--accent3) !important; color: var(--accent3) !important; background: rgba(255,110,159,0.08) !important; }

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 18px;
  border-radius: 10px;
  border: none;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.btn:disabled { opacity: 0.4; cursor: not-allowed; }

.btnPrimary { background: var(--accent); color: #0a0a0f; }
.btnPrimary:hover { background: #9fff8e; transform: translateY(-1px); }

.btnSecondary {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}
.btnSecondary:hover:not(:disabled) { border-color: var(--accent2); color: var(--accent2); }
