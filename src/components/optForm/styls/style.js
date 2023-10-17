import styled from "styled-components/macro";

export const OptContainer = styled.div`
    color:white;
    max-width:650px;
    width:100%;
    margin:auto;
    @media(max-width:1000px){
        max-width:400px;
        padding:0px 30px;
    }
`

export const InputContainer = styled.div`
    display:flex;
    @media(max-width:1000px){
        flex-direction:column;
        align-items:center;
        row-gap:20px;

    }
`

export const InputBox = styled.input`
    width:100%;
    max-width:400px;
    padding:0px 20px;
    border:none;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    outline:none;
    height:50px;
    &::Placeholder{
        font-size:17px;
        text-Transform:capitalize;
    }
    @media(max-width:1000px){
        border-radius:10px;
        width:100%
        &::Placeholder{
            font-size:14px;
        }
    }
`

export const Btn = styled.button`
    width:30%;
    height:50px;
    right:0;
    top:0;
    background-color:red;
    border:none;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    color:white;
    text-Transform:capitalize;
    font-size:20px;
    cursor:pointer;
    @media(max-width:1000px){
        border-radius:10px;
        font-size:15px;
    }
    @media(max-width:500px){
        width:100%;
    }
`

export const Text = styled.span`
    text-align:center;
    display:block;
    font-size:19px;
    padding-Top:20px;
`