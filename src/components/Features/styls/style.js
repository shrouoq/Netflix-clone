import styled from "styled-components/macro";

export const Container = styled.div`
    text-align:center;
    padding-bottom:20px;
`

export const Title = styled.h1`
    font-size:47px;
    font-weight:normal;
    @media(max-width:600px){
        font-size:35px;  
    }
    @media(max-width:450px){
        font-size:30px;  
    }
`

export const Text = styled.p`
    font-size:19px;
`