import styled from "styled-components/macro";
import {Link as ButtonLink} from 'react-router-dom'
// import { Link } from "react-router-dom/cjs/react-router-dom";

export const Background = styled.div`
    background:
    linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.35),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.35)
      ),
    url(${({ src }) => src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"}) top left / cover no-repeat;;
    display:flex;
    flex-direction:column;
`

export const Break = styled.div`
        width:100%;
        height:5px;
        background:#222;
`

export const Frame = styled.div`
    width:90%;
    margin:30px auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const TextLink = styled.p`
    &:hover{
        font-weight:bold;
        cursor:pointer;
        transition:0.5s;
    }
`

export const Picture = styled.img`
`

export const Dropdown = styled.div`
    position:absolute;
    background:red;
    padding:10px;
    width:100px;
    border-radius:5px;
    right:25px;
    display:none;
`

export const Link = styled(ButtonLink)`
    color:white;
    text-decoration:none;
    font-size:15px
    &:hover{
        font-weight:bold;
    }
`

export const Name = styled.p`
    font-size:15px;
    cursor:pointer;
    &:hover{
        font-weight:bold;
    }
`

export const Box = styled.div`

    ${({leftSide}) => leftSide && `
        display:flex;
        align-items:center;
        ${TextLink}{
            margin-left:15px;
        }
    `}

    ${({rigthSide}) => rigthSide && `
        display:flex;
        gap:15px;
    `} 

   ${({dropdownBox}) => dropdownBox && `
        position:relative;
        
        ${Picture}{
            width:40px;
            cursor:pointer;
        }

        &:hover{
            ${Dropdown}{
                display:block;
            }
        }
   `}

   ${({nameBox}) => nameBox && `
        display : flex;
        align-items:center;
        margin-bottom:10px;
        ${Picture}{
            width:20px;
            height:20px;
            margin-right:5px;
        }
   `}
`

export const SearchBox = styled.div`
        display:flex;
        align-items:center;
        height:30px;
        cursor:pointer;
        @media(max-width:600px){
            display:none;
        }
`

export const SearchIcon = styled.div`
        margin-right:10px;
        width:15px;
        img{
            width:100%;
            filter: brightness(0) invert(1);
        }
`

export const Inputt = styled.input`
        height:100%;
        width:0;
        opacity:0;
        over-flow:hidden;
        padding:0;
        out-line:none;
        border:1px solid #fff;
        border-radius:10px;
        background:rgba(64, 64, 64, 0.5);
        transition:1s;
        padding:10px;
        &::placeholder{
            color:white;
            font-size:13px;
        }
        ${({active}) => active && `
            opacity:1;
            width:200px;
        `}
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
    margin:130px 0;
    @media(max-width:1000px){
        padding:0px 20px;
    }
`

export const SelectContent = styled.div`
    width:90%;
    margin:30px auto;
`

export const Inner = styled.div`
    max-width:600px;
    width:100%;
    margin:100px 0;
`

export const Title = styled.p`
    font-size:50px;
    font-weight:bold;
    margin-bottom:15px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    @media(max-width:767px){
        font-size:40px;
    }
`

export const Content = styled.p`
    font-size:22px;
    line-height:1.4;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    @media(max-width:767px){
        font-size:18px;
    }
`
export const Btn = styled.button`
    color:black;
    font-size:22px;
    font-weight:bold;
    background:white;
    outline:none;
    border:none;
    padding:8px 30px;
    border-radius:5px;
    cursor:pointer;
    transition:0.5s;
    margin-top:20px;
    &:hover{
        color:#fff;
        background:red;
    }
`