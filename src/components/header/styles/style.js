import styled from "styled-components/macro";
import {Link as ButtonLink} from 'react-router-dom'

export const Background = styled.div`
    background:url(${({src}) => (src ? `/images/misc/${src}.jpg` : `/images/misc/home-bg.jpg`)}) no-repeat;
    display:flex;
    flex-direction:column;
    border-bottom: 5px solid #222;
    `

export const Frame = styled.div`
    width:90%;
    margin:30px auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const Logo = styled.img` 
    width:150px;
    @media(max-width:767px){
        width:120px
    }
`

export const Button = styled(ButtonLink)`
    text-decoration:none;
    text-transform:capitalize;
    background-color:red;
    color:white;
    border-radius:5px;
    padding:6px 15px;
`

export const HeaderContent = styled.div`
    margin:100px 0;
    @media(max-width:1000px){
        padding:0px 20px;
    }
`