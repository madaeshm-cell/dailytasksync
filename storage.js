.preview {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 16px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--panel);
}

.label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--muted2);
}

.copyBtn {
  padding: 4px 12px;
  border-radius: 7px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font-size: 11px;
  font-weight: 600;
  transition: all 0.15s;
  font-family: 'Syne', sans-serif;
}
.copyBtn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.copyBtn:disabled { opacity: 0.4; cursor: not-allowed; }

.body {
  padding: 16px;
  max-height: 340px;
  overflow-y: auto;
}

.text {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  line-height: 1.75;
  color: #c8c8d8;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
}

.loading {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: var(--muted2);
}
.loading::after {
  content: '';
  animation: dots 1.2s infinite;
}
@keyframes dots {
  0% { content: '.'; }
  33% { content: '..'; }
  66% { content: '...'; }
}
