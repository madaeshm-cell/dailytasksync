.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 28px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logoDot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(127, 255, 110, 0.5); }
  50% { box-shadow: 0 0 35px rgba(127, 255, 110, 0.8); }
}

.logoText {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--text);
}

.accent { color: var(--accent); }

/* Schedule bar */
.scheduleBar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 100px;
  background: var(--panel);
  border: 1px solid var(--border);
  font-size: 12px;
  font-family: 'DM Mono', monospace;
  color: var(--muted);
}

.pillDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}
.pillDot.blue { background: var(--accent2); }

.countdown {
  color: var(--accent);
  font-weight: 500;
}
.countdown.blue { color: var(--accent2); }

.model {
  background: var(--surface);
  color: var(--muted2);
}

.modelIcon {
  color: var(--accent2);
  font-size: 9px;
}

/* Clock */
.clockArea { text-align: right; }

.clock {
  font-family: 'DM Mono', monospace;
  font-size: 26px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 2px;
}

.clockLabel {
  font-size: 10px;
  color: var(--muted2);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
  .clockArea { text-align: left; }
  .scheduleBar { width: 100%; }
}
