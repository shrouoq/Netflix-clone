import React from 'react'
import {Item , Inner , Container , Pane , Title , Image , SubTitle } from './styls/jumbo'
import { SlideWidth } from '../../global-styles' 


export default function Jumbotron({children , ...restProps}) {
  return (
    
       <Item>
            <SlideWidth>
                <Inner {...restProps}>
                    {children}
                </Inner>
            </SlideWidth>
       </Item>
    
  )
}


Jumbotron.Container  = function jumboContainer ({children , ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function jumboPane ({children , ...restProps}) {
    return <Pane>{children}</Pane>
}

Jumbotron.Title = function jumboTitle ({children , ...restProps}) {
    return <Title>{children}</Title>
}

Jumbotron.SubTitle = function jumboSub ({children , ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function jumboImage ({...restProps}){
    return <Image {...restProps} />
}