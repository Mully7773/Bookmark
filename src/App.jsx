import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global/GlobalStyles';
import { base, mainTheme } from './themes/themes';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import MainWrapper from './components/Main/MainWrapper';

const App = () => {
  const currentTheme = {
    ...base,
    ...mainTheme,
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <NavBar />
      <MainWrapper>
        <Hero />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default App;
