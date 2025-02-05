import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QuizApp } from './QuizApp.jsx'
import './QuizApp.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizApp/>
  </StrictMode>,
)
