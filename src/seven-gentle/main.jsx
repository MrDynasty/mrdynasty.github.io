import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './seven-gentle.css'
import SevenGentleHome from './SevenGentleHome'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SevenGentleHome />
  </StrictMode>,
)
