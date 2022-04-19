import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin:0;
    padding:0;

    box-sizing: border-box;

}

ul{
  list-style: none;
  display: flex;
}

body,
input,
button,
textarea {
  font-family:  "Roboto", sans-serif;
}




`;
