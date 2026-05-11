.app {
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  flex: 1;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .app {
    padding: 16px;
  }
}

.footer {
  margin-top: 32px;
  padding: 20px 0;
  border-top: 1px solid var(--border);
  text-align: center;
  font-size: 11px;
  color: var(--muted2);
  font-family: 'DM Mono', monospace;
  letter-spacing: 0.5px;
}
