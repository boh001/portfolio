import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
   
    *{
        box-sizing:border-box;
    }
    body{
        color:white;
        font-family: 'Poppins', sans-serif;

    }
    html{

    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;
