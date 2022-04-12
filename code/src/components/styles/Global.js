import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*:focus {
    outline: none;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: #fffcf9;
}

main {
    max-width: 365px;
    margin: auto;
}

h1 {
    margin: 20px 0 20px 0;
}

input[name="input"] {
    width: 80%;
    height: 20px;
    border: 1px solid #706B6B;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2em;
    background-color: #fffefd;
}

input[name="checkTask"] {
    width: 20px;
    height: 20px; 
}

p { 
    color: #706B6B;
}

button {
    box-sizing: border-box;
    border: none;
    background: none;
    cursor: pointer;
}

`