import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './styles/theme/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
