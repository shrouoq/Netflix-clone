import React from 'react'
import logo from '../logo.svg'
import Header from './../components/header/head';
import Profile from './../profile/profile';

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
                    <Profile.Name>{user.displayName}</Profile.Name>
                </Profile.Item>
            </Profile.List>
        </Profile>
    
    </>
  )
}
