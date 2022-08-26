import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font: 500 1.6rem;
  color: white;
  font-family: 'bello-pro-1', 'bello-pro-2', sans-serif;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
}
`;
