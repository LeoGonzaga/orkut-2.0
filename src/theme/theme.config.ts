import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}


body, button,input {
 
  font-weight: 400;
  font-style: normal;
}
body{
  font-family: 'Montserrat', sans-serif; 
  overflow: hidden;

}

input, textarea, button {
  font-family: 'Montserrat', sans-serif;
}
`;
