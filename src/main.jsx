import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HashRouter as Router } from "react-router-dom";
import App from './DigitalAgency.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
