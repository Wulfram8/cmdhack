import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './styles/theme/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
