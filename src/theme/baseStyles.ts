import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font: 16px/1 'Open Sans', Helvetica, Arial, sans-serif;
  }
  
  button, input, textarea, select {
    border: 0;
  
    background: none;
    
    outline: none;
  }
  
  button, input[type="submit"] {
    cursor: pointer;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    
    min-height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;