import { createGlobalStyle } from 'styled-components'
/**
 * Global styles
 */
const GlobalStyles = createGlobalStyle`
 
  * {
    box-sizing: border-box;

  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Roboto', sans-serif;
    font-size: 1.15em;
 
    width: 100%;
  }
  

  `

export default GlobalStyles