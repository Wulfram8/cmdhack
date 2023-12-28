import AppRouter from './router/AppRouter';
import './styles/main.scss';
import { useTheme } from './styles/theme/useTheme.ts';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Change Theme</button>
      <AppRouter />
    </div>
  );
}

export default App;
