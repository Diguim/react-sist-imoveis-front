import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --primary: #F7F9FC;
        --secondary: #15181C;
        --gray: #D9D9D9;
        --blue: #4766FF;
        --white: #FFF;
    }
    body{
        background-color: var(--primary);
        color: var(--secondary);
        font-family: 'Dosis', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
    }
    ul, nav{
        list-style-type: none;
        list-style: none;
    }
    a{
        text-decoration: none;
    }

`