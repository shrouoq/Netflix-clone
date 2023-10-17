import styled from "styled-components/macro";
import {Link as FormLink} from 'react-router-dom'

export const Container = styled.div`
    max-width:450px;
    width:100%;
    margin:0px auto 100px;
    background-color:rgb(0,0,0,0.7);
    padding:60px;
    border-radius:10px;
    @media(max-width:500px){
        max-width:350px
    }
`

export const FormTitle = styled.h1`
    margin-bottom:30px;
`

export const ErrorMess = styled.p`
    background-color:  #e87c03;
    padding:10px;
    border-radius:5px;
    font-size:15px;
    text-transform:capitalize;
`

export const Basic = styled.form`
    display:flex;
    flex-direction:column;
`

export const Inpu = styled.input`
    border:none;
    outline:none;
    background-color:#333;
    padding:13px 10px;
    border-radius:5px;
    color:#fff;
    &:not(:last-of-type){
        margin-bottom:15px;
    }
    &::placeholder{
        text-transform:capitalize;
        font-size:16px;
    }
`

export const SignBtn = styled.button`
    margin-top:40px;
    padding:15px 0;
    border-radius:5px;
    border:none;
    outline:none;
    text-transform:capitalize;
    background: #e50914;
    color:white;
    cursor:pointer;
    &:disabled{
        opacity:0.5;
    }
`

export const Text = styled.p`
    color: #737373;
    padding-top:15px;
`

export const Link = styled(FormLink)`
    color: #fff;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
`

export const SmallText = styled.p`
    color: #737373;
    font-size:14px;
` 