import React from 'react'
import { useState , useContext } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import SignForm from '../components/signForm/form'
import { FirebaseContext } from '../context/context' 

export default function SignUp() {

    const [firstName , setFirstName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState('')

    const History = useHistory();

    const invalid =  firstName === '' || email === '' || password === '';

    const {firebase} = useContext(FirebaseContext)

  const HandelSubmit = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            History.push('/browse');
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });

  }

  return (
    <>
      <HeaderContainer>

        <SignForm>

          <SignForm.FormTitle>Sign Up</SignForm.FormTitle>

          <SignForm.Basic onSubmit={HandelSubmit}>

            {error && <SignForm.ErrorMess>{error}</SignForm.ErrorMess>}

            <SignForm.Inpu 
              type='text'
              placeholder='first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <SignForm.Inpu 
              type='email'
              placeholder='email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <SignForm.Inpu 
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <SignForm.SignBtn type='submit' disabled={invalid}>sign up</SignForm.SignBtn>

            <SignForm.Text>
              New to Netflix?
            <SignForm.Link to='/signin'> Sign in now.</SignForm.Link>
            </SignForm.Text>

            <SignForm.SmallText>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </SignForm.SmallText>

          </SignForm.Basic>
        </SignForm>


      </HeaderContainer>
  
      <FooterContainer />
    </>
  )
}
