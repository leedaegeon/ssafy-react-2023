import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';

const rootElement = document.getElementById('root');


// StrictMode 는 개발 모드에서만 활성되고 배포시에는 전혀 영향을 미치지 않는다.
// 렌더를 한번 더 해서 순수함을 체크하기 때문

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
