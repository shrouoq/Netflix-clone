import React from 'react'
import {Container ,  Titl , LinksContainer ,  Column , Link} from './styls/footerStyle'
// import { SlideWidth } from '../../global-styls'

export default function Footer({children}) {
  return (
    <Container>{children}</Container>
  )
}

Footer.Titl = function FooterTitle({children , ...restProps}){
  return <Titl {...restProps}>{children}</Titl>
}

Footer.LinksContainer = function links ({children , ...restProps}) {
  return <LinksContainer {...restProps}>{children}</LinksContainer>
}

Footer.Column = function columnContainer({children , ...restProps}) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink ({children,...restProps}) {
  return <Link {...restProps} >{children}</Link>
}

