import styled from "styled-components";

export const Container = styled.div`
    border-bottom:5px solid #222;
    padding:100px 0;
    @media(max-width:1000px){
        padding-right:20px;
        padding-left:20px;
    }
`
export const Inner = styled.div`
    max-width:750px;
    margin:auto
`

export const Title = styled.h1`
    font-size:45px;
    text-align:center;
    margin-bottom:50px;
    @media(max-width:400px){
        font-size:35px;
    }
`

export const ItemsContainer = styled.div`
    transition:5s;
    margin-bottom:40px;
`

export const Item = styled.div`
    &:not(:last-child){
        padding-bottom:15px;
    }
`

export const Header = styled.div`
    background-color:#303030;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    border-radius:10px;
    font-size:23px;
    img{
        filter: brightness(0) invert(1);
        width:20px;
        @media(max-width:500px){
            width:17px;
        }
    }
    @media(max-width:500px){
        font-size:19px;
    }
`

export const Body = styled.div`
    background-color:#303030;
    line-height:2;
    font-size:20px;
    user-select:none;
    overflow: hidden;
    margin-top:10px;
    white-space:pre-wrap;
   
    &.close{
        max-height:0px;
        over-flow:hidden;
        transition: 5s;
    }
    $.open{
        max-height:300px;
        transition: 5s;
    }

    span{
        display:block;
        padding:15px;
    }
    @media(max-width:500px){
        font-size:16px;
    }
`








