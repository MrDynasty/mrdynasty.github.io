import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './seven-gentle.css'
import SupportPage from './SupportPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupportPage />
  </StrictMode>,
)
