import styled from "styled-components/macro";

export const Container = styled.div`
`
export const OverLay = styled.div`
    position:fixed;
    z-index:3000;
    width:100%;
    height:100%;
    top:0;
    right:0;
    background-color:rgba(0,0,0,.5);
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Inner = styled.div`
    position:relative;
    width:800px;
    heigth:500px;
    video{
        width:100%;
        height:100%;
    }
    img{
        position:absolute;
        cursor:pointer;
        top:20px;
        right:20px;
        filter : brightness(0) invert(1);
        width:25px;
    }
`
export const Button = styled.button`
    position:absolute;
    z-index:5;
    margin-left:80px;
    border:none;
    outline:none;
    background:red;
    color:#fff;
    padding:10px 30px;
    transition:0.5s;
    cursor:pointer; 
    bottom:30px;
    font-size:19px;
    font-weight:bold;
    &:hover{
        transform:scale(1.2);
    }
`


