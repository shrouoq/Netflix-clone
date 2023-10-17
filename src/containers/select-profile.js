import React from 'react'
import Header from '../components/header/head'
import logo from '../logo.svg'
import Profile from '../components/profile/profile'

export default function SelectProfile({user , setProfile}) {
  return (
    <>
    
        <Header bg={false}>
        <Header.Frame>
            <Header.Logo to='/' src={logo} alt='NavLogo'/>
        </Header.Frame>
        </Header>

        <Profile>
            <Profile.Title>Who's watching?</Profile.Title>
            <Profile.List >
                <Profile.Item onClick={() => {
                    setProfile({
                        displayName:user.displayName,
                        photoURL : user.photoURL
                    })
                }}>
                    <Profile.Pic src={user.photoURL}  alt='profilePic'/>
                    <Profile.name>{user.displayName}</Profile.name>
                </Profile.Item>
            </Profile.List>
        </Profile>
    
    </>
  )
}
