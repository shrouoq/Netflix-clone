import styled from "styled-components/macro";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const Title = styled.p`
    font-size:48px;
    font-weight:normal;
    padding-bottom:20px;
    @media(max-width:500px){
        font-size:35px;
    }
`

export const Item = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    cursor:pointer;
`

export const Pic = styled.img`
    width:160px;
    border:5px solid black;
    transition:.7s;
`

export const Name = styled.p`
    padding-top:15px;
    text-transform:capitalize;
    letter-spacing:2px;
    transition:.7s;
`

export const List = styled.ul`
    padding-right:25px;
     &:hover ${Pic} {
        border-color:#fff;
     }

     &:hover ${Name} {
        font-weight:bold;
     }
`