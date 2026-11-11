// react-scan 은 React 보다 먼저 불러와야 렌더링을 가로챌 수 있다
import { scan } from 'react-scan'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 다시 렌더링된 컴포넌트에 테두리를 그려 준다 (개발 모드에서만)
scan({ enabled: import.meta.env.DEV })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
