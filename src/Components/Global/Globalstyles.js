import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
   
    *{
        -moz-box-sizing: border-box; /* Firefox  */

        -webkit-box-sizing: border-box; /* Safari */

        box-sizing: border-box; /* CSS3 Standard */





    }
    body{

        color:white;
        font-family: 'Poppins', sans-serif;

    }



    a{
        text-decoration:none;
        color:inherit;
    }
    input{
        font-family:inherit;
        background-color:transparent;
        border:none;
        border-bottom:1px solid ;
        color:inherit;
        padding-bottom:10px;
        &:focus {
      outline: none;
    }
    }
    textarea{
        font-family:inherit;
        background-color:transparent;
        border:none;
        border-bottom:1px solid ;
        color:inherit;
        &:focus {
      outline: none;
    }
    }
`;
