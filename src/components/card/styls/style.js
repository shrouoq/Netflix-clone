import styled from "styled-components/macro";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`

export const Group = styled.div`
    display:flex;
    flex-direction:column;
    transform: translateY(-80px);
`

export const Row = styled.div`
    width:90%;
    margin:auto;
`

export const Title = styled.p`
    font-size:28px;
    padding:15px 0;
    font-weight:bold;
`

export const ItemsRow = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
    gap:5px;
`

export const Picture = styled.img`
    width:100%;
    Heigth:100%;
`

export const Data = styled.div`
    position:absolute;
    bottom:0;
    background:rgba(0,0,0,0.6);
    padding:5px;
    display:none;
`
export const Item = styled.div`
    position:relative;
    cursor:pointer;
    transition:0.7s;
    &:hover{
        z-index:99;
        transform:scale(1.4);
        ${Data}{
            display:block;
        }
    }
`

export const DataTitle = styled.p`
    font-size:13px;
    font-weight:bold;
    padding-bottom:5px;
`

export const Text = styled.p`
    font-size:10px;
    line-height:1.2;
`

export const Features = styled.div`
    position:relative;
    height:370px;
    width:100%;
    margin-top:-4px;
`

export const FeaturePic = styled.img`
    position:absolute;
    bottom:0;
    height:100%;
    width:100%;
`

export const FeatureData = styled.div`
    position:relative;
    z-index:10;
    width:90%;
    margin:auto;
    padding:20px 0;
`

export const FeatureTitle = styled(Title)`
    padding:0px 0 20px;
`
export const FeatureText = styled.p`
    font-size:17px;
    max-width:600px;
    width:100%;
    line-height:1.2;
    margin-bottom:20px;
`

export const Maturity = styled.div`
    display:flex;
    align-items:center;
    gap:15px;
`

export const Meta = styled.p`
    width:28px;
    height:28px;
    border-radius:15px;
    text-align:center;
    line-height:28px;
    background-color : ${({range}) => range < 12 ? 'red' : 'green'};
    font-size:12px;
`

export const Type = styled.p`
    font:23px bold;
`

export const Close = styled.button`
    border:none;
    outline:none;
    cursor:pointer;
    position:absolute;
    top:15px;
    right:0;
    background:transparent;
    > img {
        filter : brightness(0) invert(1);
        width:24px;
    } 
`

