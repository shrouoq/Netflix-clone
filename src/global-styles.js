import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    webkit-box-sizing:border-box;
    box-sizing:border-box;
}

html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: white;
    font-size: 16px;
    padding:0;
    margin:0
}
h1{
    padding:0;
    margin:0
}

p{
    margin:0;
}
`

export const SlideWidth = styled.div`

    max-width:1000px;
    margin:auto;

    @media(max-width:767px){
        max-width:620px;
    }

    @media(min-width:768px){
        max-width:650px;
    }

    @media(max-width:991px){
        flex-direction:column;
        row-gap:25px;
        padding-rigth:15px;
        padding-left:15px;
    }

    @media(min-width:992px){
        max-width:950px;
    }

    @media(min-width:1200px){
        max-width:1120px;
    }
`