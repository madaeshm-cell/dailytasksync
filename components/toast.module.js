.container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
}

.toast {
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid;
  animation: toastIn 0.3s ease;
  font-family: 'Syne', sans-serif;
}

@keyframes toastIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.success { background: rgba(127,255,110,0.1); border-color: rgba(127,255,110,0.3); color: #7fff6e; }
.error   { background: rgba(255,110,159,0.1); border-color: rgba(255,110,159,0.3); color: #ff6e9f; }
.info    { background: rgba(110,159,255,0.1); border-color: rgba(110,159,255,0.3); color: #6e9fff; }
