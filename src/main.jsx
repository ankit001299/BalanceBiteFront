import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/loading.css'
import App from './App.jsx'

// Create root element with loading state
const rootElement = document.getElementById('root')
rootElement.className = 'loading'

// Render app
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Remove loading class after styles have been applied
window.addEventListener('load', () => {
  // Give a small delay to ensure all styles are computed
  requestAnimationFrame(() => {
    rootElement.className = 'loaded'
  })
})
