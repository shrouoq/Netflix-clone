import React, { createContext , useContext, useState } from 'react'
import {Container , 
        Inner , 
        Title , 
        ItemsContainer 
        , Item 
        , Header 
        , Body 
        , InpContainer
        , Text
        , Btn
        , InputBox } from './styls/style'

const context = createContext();

export default function Accordion({children , ...restProps}) {
  return (
    <Container {...restProps}>
        <Inner>
            {children}
        </Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({children , ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.ItemsContainer = function ItemsContainerr ({children , ...restProps}) {
    return <ItemsContainer {...restProps}>{children}</ItemsContainer>
}

Accordion.Item = function AccordinItem ({children , ...restProps}) {
    const [openMenue , setOpenMenue] = useState(false)
    return <context.Provider value={{openMenue , setOpenMenue}}>
                <Item {...restProps}>{children}</Item>
           </context.Provider>
}

Accordion.Header = function AccordionHeader ({children , ...restProps}) {
    const {openMenue , setOpenMenue} = useContext(context)
    return <Header {...restProps} onClick={() => setOpenMenue(!openMenue)}>
        {children}
        {
            openMenue ? <img src='/images/icons/close-slim.png' alt='pic'/> : <img src='/images/icons/add.png' alt='pic'/>
        }
        </Header>
}

Accordion.Body = function AccordionBody ({children , ...restProps}) {
    const {openMenue} =  useContext(context)
    return <Body {...restProps} className={openMenue?'open' : 'close'}>
                <span>{children}</span>
           </Body>
}


