import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl && rootEl.dataset.react === 'true') {
  createRoot(rootEl).render(<App />);
}
