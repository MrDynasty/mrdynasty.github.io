import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChingTermsPage from './ChingTermsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChingTermsPage />
  </StrictMode>,
)
