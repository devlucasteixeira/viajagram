import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

textarea, button{
  font-family: inherit;
}

button, a {
  cursor: pointer;
  border: none;
  background-color: inherit;
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
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
}
`;
