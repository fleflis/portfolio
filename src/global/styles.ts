import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  #root {
    background: #191920;
    height: 100vh;
    display: flex;
  }

  .cursor-white {
    color: white !important;
  }
`;
