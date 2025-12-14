import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/theme/ThemeProvider'
import { ErrorBoundary } from 'react-error-boundary'
import '@/app/styles/index.scss'
import App from '@/app/App.tsx'
import '@/shared/config/i18n/i18n'
import {ErrorPage} from './pages/ErrorPage/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary fallback={<ErrorPage/>}>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
