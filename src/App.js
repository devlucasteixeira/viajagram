import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import defaultColors from './styles/colors';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={defaultColors}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
