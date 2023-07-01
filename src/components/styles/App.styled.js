import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f3f6f4;
  background-image: linear-gradient(to bottom right, #ffdadd, #ffefdd, #ffffdd, #ddffe5, #ddeaff);
  }  
`;
export default GlobalStyle;

//#6cc8d9, #73e2f7, #d2f7fd, #f3f6f4, #d2d2d2
// #ffd1d5, #ffebd5, #ffffd5, #d5ffde, #d5e5ff *lighter
// #ffdadd, #ffefdd, #ffffdd, #ddffe5, #ddeaff *even lighter
//#ffb3ba, #ffdfba, #ffffba, #baffc9, #bae1ff *darker
