import React from 'react'

import { Container , Title , List , Item , Pic ,Name } from './styls/style'

export default function Profile({children , ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Profile.Title = function profilrTitle ({children , ...restProps}){
    return   <Title {...restProps}>{children}</Title>
}

Profile.List = function profileList ({children , ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Profile.Item = function profileUser ({children , ...restProps}){
    return   <Item {...restProps}>{children}</Item>
}

Profile.Pic = function profilePic ({src,...restProps}) {
    return <Pic src={src? `/images/users/${src}.png` : '/images/misc/loading.gif'} {...restProps} />
}

Profile.Name = function profileName ({children , ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}
