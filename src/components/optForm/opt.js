import React from 'react'
import { OptContainer , InputContainer , InputBox , Btn , Text} from './styls/style'

export default function Opt({children , ...restProps}) {
  return (
    <OptContainer {...restProps}>
      {children}
    </OptContainer>
  )
}

Opt.InputContainer = function InpContainer ({children , ...restProps}) {
    return (
        <InputContainer {...restProps}>{children}</InputContainer>
    )
}

Opt.InputBox = function InpBox ({children , ...restProps}) {
    return (
        <InputBox {...restProps}>{children}</InputBox>
    )
}

Opt.Btn = function FormButton ({children , ...restProps}){
    return (
        <Btn {...restProps}>{children}</Btn>
    )
}

Opt.Text = function FormText ({children , ...restProps}) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}