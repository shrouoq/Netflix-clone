import styled from 'styled-components/macro'

export const Item = styled.div`
    border-bottom:5px solid #222;
    @media(max-width:1000px){
        padding:20px;
    }
`

export const Inner = styled.div`
    display:flex;
    flex-direction:${({direction}) => direction};
    justify-content:space-between;
    align-items:center;
    padding:50px 0;
    @media(max-width:1000px){
        flex-direction:column;
    }
`
export const Container = styled.div`
`

export const Pane = styled.div`
    flex:1;

    @media(max-width:991px){
        text-align:center;
    }
`
export const Title = styled.h2`
    font-size: 45px;
    line-height:1.2;
    

    @media(max-width:991px){
        font-size: 30px; 
    }
`
export const Image = styled.img`
    max-width:100%;
    height: auto;
`
export const SubTitle = styled.span`
    font-size: 23px;
    display:block;

    @media(max-width:991px){
        font-size: 17px; 
        line-height:1.2;
    }
`
