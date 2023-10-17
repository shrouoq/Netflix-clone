import React , { useState , useContext } from 'react';
import { useHistory } from "react-router-dom";
import SignForm from '../components/signForm/form';
import {FirebaseContext} from '../context/context'
import FooterContainer from './../containers/footer';
import HeaderContainer from '../containers/header';


export default function SignIn() {

    const history = useHistory();

    const [error , setError] = useState('')
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
    const {firebase} = useContext(FirebaseContext)

    const inValid = name == '' || password == '';

    const HandelSubmit = (e) => {
     
      e.preventDefault();
     
      return firebase
      .auth()
      .signInWithEmailAndPassword(name,password)
      .then(() => {
        history.push('/browse')
      })
      .catch((error) => {
        setName('')
        setPassword('')
        setError(error.message)
      })
    }

  return (
    <>
      <HeaderContainer>

        <SignForm>
          <SignForm.FormTitle>Sign In</SignForm.FormTitle>

          {error &&  <SignForm.ErrorMess>{error}</SignForm.ErrorMess>}

          <SignForm.Basic onSubmit = {HandelSubmit}>

            <SignForm.Inpu
             type='text' 
             placeholder='email adress'
             value = {name}
             onChange = {(e) => setName(e.target.value)}
           />

            <SignForm.Inpu
             type='password'
             autoComplete="off"
             placeholder='password'
             value={password}
             onChange = {(e) => setPassword(e.target.value)}
            />

            <SignForm.SignBtn 
              type='submit'
              disabled={inValid}
            >
              sign in
            </SignForm.SignBtn>

            <SignForm.Text>
            New to Netflix?
            <SignForm.Link to='/signup'> Sign up now.</SignForm.Link>
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
