import React from 'react'
import { Background 
    , Frame 
    , Logo 
    , Button 
    , HeaderContent 
    , Box 
    , TextLink
    , Picture
    , Dropdown
    , Name
    , SearchBox
    , SearchIcon
    , Inputt
    , Link
    , SelectContent
    , Title
    , Content
    , Inner
    , Btn
    , Break
} from './styls/style'
import {Link as HeaderLink} from 'react-router-dom'

export default function Header({bg=true , br=true , children , ...restProps}) {
  return (
    bg ? <Background {...restProps}>
        {children}
        {
            br && <Break />
        }
        </Background> : children
  )
}

Header.Frame = function NavFrame ({children,...restProps}) {
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}

Header.Box = function selFrame ({children , ...restProp}) {
    return <Box {...restProp}>{children}</Box>
}

Header.TextLink = function Text ({children,...restProps}) {
    return <TextLink {...restProps}>{children}</TextLink>
}

Header.Logo = function NavLogo ({to , ...restProp}) {
    return (
        <HeaderLink to={to} >
            <Logo {...restProp} />
        </HeaderLink>
    )
}

Header.picture = function HeaderPic ({src,...restProp}){
    return <Picture src={`/images/users/${src}.png`}/>
}

Header.Dropdown = function DropList ({children , ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Link = function headerLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.Name = function userName({children, ...restProp}){
    return <Name {...restProp}>{children}</Name>
}

Header.SearchBox = function search({children,...restProps}){
    return <SearchBox {...restProps}>{children}</SearchBox>
}

Header.SearchIcon = function Icon ({children , ...restProp}){
    return <SearchIcon {...restProp}>{children}</SearchIcon>
}

Header.SelectContent = function content({children , ...restProps}){
    return <SelectContent {...restProps}>{children}</SelectContent>
}

Header.Inputt = function Inp({ ...restProp}){
   return <Inputt {...restProp} />
}

Header.Button = function NavButton ({to , children}) {
    return (
        <Button to={to}>{children}</Button>
    )
}

Header.HeaderContent = function HeadContent ({children}) {
    return (
        <HeaderContent>{children}</HeaderContent>
    )
}

Header.Inner = function InnerContent ({children}){
    return <Inner>{children}</Inner>
}

Header.Title = function HeaderTitle ({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Header.Content = function HeadContent({children}){
    return <Content>{children}</Content>
}

Header.Btn = function play({children,...restProps}){
    return <Btn {...restProps}>{children}</Btn>
}


