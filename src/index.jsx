import { createRoot } from 'react-dom/client';
import { HeaderProvider } from './context/HeaderContext.jsx'; // 경로는 실제 파일 경로에 맞게 수정
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HeaderProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HeaderProvider>
);
