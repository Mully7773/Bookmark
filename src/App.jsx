import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global/GlobalStyles';
import { base, mainTheme } from './themes/themes';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const currentTheme = {
    ...base,
    ...mainTheme,
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
