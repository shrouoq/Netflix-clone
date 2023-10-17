import styled from "styled-components";
import { SlideWidth } from "../../../global-styles";

export const Container = styled(SlideWidth)`
    padding:80px 0;
    @media(max-width:1000px){
        padding-right:20px;
        padding-left:20px;
    }
`

export const Titl = styled.p`
    font-size:18px;
    color:#757575;
    margin-bottom:25px;
`

export const LinksContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(250px , 1fr));
    row-gap:25px
`

export const Column = styled.div`
`

export const Link = styled.a`
    display:block;
    color:#757575;
    text-decoration:none;
    padding-bottom:20px;
    font-size:13px;
    width:fit-content;
    &:hover{
        text-decoration:underline;
    }
`

