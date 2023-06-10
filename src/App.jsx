import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global/GlobalStyles';
import { base, mainTheme } from './themes/themes';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import MainWrapper from './components/Main/MainWrapper';
import Features from './components/Features/Features';
import Extensions from './components/Extensions/Extensions';
import Faq from './components/Faq/Faq';

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
        <Features />
        <Extensions />
        <Faq />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default App;
