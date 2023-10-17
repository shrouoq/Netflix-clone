import React from 'react'
import { Container , Title , Text } from './styls/style'

export default function Features({children , ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Features.Title = function FeatTitle ({children , ...restProps}) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Features.Text = function FeatText ({children , ...restProps}) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}