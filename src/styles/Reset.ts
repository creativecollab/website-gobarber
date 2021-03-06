import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background-color: #312e38;
    -webkit-font-smoothing: antialiased;
    color: #FFF;
  }

  body, input, button{
    font-size: 1em;
    font-family: 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;

  }

  button{
    cursor: pointer;
  }

  #root{
    height: 100vh;
  }

`;
