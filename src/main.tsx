import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './tailwind.css';
import styles from './index.css?inline';

import App from 'app';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <style precedence="medium">{styles}</style>
    <title>Vite + TS + React + TailwindCSS</title>
    <App />
  </StrictMode>,
);
