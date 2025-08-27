const API_BASE = import.meta.env.VITE_API_BASE || '';

async function api(p, m='GET', b, t){
  const url = `${API_BASE}${p}`;
  const r = await fetch(url, {
    method: m,
    headers: {
      'Content-Type': 'application/json',
      ...(t ? { Authorization: 'Bearer ' + t } : {})
    },
    body: b ? JSON.stringify(b) : undefined
  });
  try { return await r.json() } catch { return { ok:false } }
}

// LaunchSpark Frontend v5.0.1 Phoenix (main.jsx)
// Minimal React app placeholder
import React from 'react'
import {createRoot} from 'react-dom/client'
function App(){ return <h1 style={{fontFamily:'system-ui'}}>LaunchSpark Frontend v5.0.1 Phoenix</h1> }
createRoot(document.getElementById('root')).render(<App/>)
