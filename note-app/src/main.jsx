import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { NoteProviderWrapper } from './contexts/note.context'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NoteProviderWrapper>
        <App />
      </NoteProviderWrapper>
    </BrowserRouter>
  </StrictMode>,
)
