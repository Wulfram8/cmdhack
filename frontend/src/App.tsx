import AppRouter from './router/AppRouter';
import './styles/main.scss';
import { useTheme } from './styles/theme/useTheme.ts';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <AppRouter />
    </div>
  );
}

export default App;
