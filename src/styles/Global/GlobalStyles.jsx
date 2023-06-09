import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        scroll-behavior: smooth;
}

/* Default focus styles & keyboard focus */
:focus {
        outline: 0.2rem dashed ${props => props.theme.primary.focusOutline};
        outline-offset: 0.3rem;
     }

     :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0rem;
  }

    :focus-visible {
    outline: .2rem dashed ${props => props.theme.primary.focusOutline};
    outline-offset: .3rem;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        line-height: 1.6;
        font-weight: 300; 
        height: 100%
  }
  
  img, picture, svg, video {
        display: block;
        max-width: 100%;
    }

    button {
        display: inline-block;
        outline-color: transparent;
        border: none;
        text-decoration: none;
        cursor: pointer;
        text-transform: capitalize;
        line-height: 1;
        font-size: 1.6rem;
    }

    input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

p {
  color: ${props => props.theme.neutral.pHeroColor};
  font-size: 1.8rem;
}

h2 {
  text-transform: capitalize;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 3rem;
    color: ${props => props.theme.neutral.h2Color};
}

h3 {
  font-size: 2.1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
}

li {
  list-style-type: none;
}

a:link,
a:visited {
  display: inline-block;
  text-decoration: none;
}


    @media screen and (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    /* Very short durations means JavaScript that relies on events still works */
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

@media (max-width: 1050px) {
  html body {
    height: auto;
  }
}

`;

export default GlobalStyles;
