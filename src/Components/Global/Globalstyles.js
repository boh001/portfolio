import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
   
    *{
        box-sizing:border-box;
    }
    body{
        color:white;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;
