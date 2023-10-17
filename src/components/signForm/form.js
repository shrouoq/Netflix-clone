import React from 'react'
import { Container , FormTitle , Basic , Inpu , SignBtn , Link  , Text , SmallText , ErrorMess } from './styls/style'

export default function SignForm({children , ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

SignForm.FormTitle = function Title ({children , ...restProps}){
    return(
        <FormTitle {...restProps}>{children}</FormTitle>
    )
}

SignForm.ErrorMess = function error ({children}) {
    return (
        <ErrorMess>{children}</ErrorMess>
    )
}

SignForm.Basic = function MainForm ({children , ...restProps}){
    return (
        <Basic {...restProps}>{children}</Basic>
    )
}

SignForm.Inpu = function Inp ({children , ...restProps}){
    return (
        <Inpu {...restProps}>{children}</Inpu>
    )
}

SignForm.SignBtn = function SIgnButton ({children , ...restProps}){
    return (
        <SignBtn {...restProps}>{children}</SignBtn>
    )
}

SignForm.Text = function SignText ({children , ...restProps}){
    return (
        <Text {...restProps}>
            {children}
        </Text>
    )
}

SignForm.Link = function SignLink({children , ...restProps}){
     return (
        <Link {...restProps}>{children}</Link>
     )
}

SignForm.SmallText = function TextSmall({children , ...restProps}) {
    return (
        <SmallText {...restProps}>{children}</SmallText>
    )
}