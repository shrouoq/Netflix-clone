import React from 'react'
import Header from '../components/header/head'
import logo from '../logo.svg'

export default function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to='/' src={logo} alt='NavLogo'/>
        <Header.Button to='/signin'>sign in</Header.Button>
      </Header.Frame>
      
      {children}
    </Header>
  )
}


