import React from 'react'
import Header from '../components/header/head';
import Opt from '../components/optForm/opt';
import HeaderContainer from '../containers/header';
import Jumbo from './../containers/jumbotron';
import AccordionContainer from '../containers/accordion';
import FooterContainer from './../containers/footer';
import Features from './../components/Features/features';


export default function Home() {
  return (
    <>

      <HeaderContainer>
        
        <Header.HeaderContent>

            <Features>
              <Features.Title>Unlimited films, TV<br />programmes and more.</Features.Title>
              <Features.Text>Watch anywhere. Cancel at any time.</Features.Text>
            </Features>

            <Opt>

              <Opt.InputContainer>
                <Opt.InputBox type='text' placeholder='email address' />
                <Opt.Btn>try it now</Opt.Btn>
              </Opt.InputContainer>

              <Opt.Text>Ready to watch? Enter your email to create or restart your membership.</Opt.Text>

            </Opt>

        </Header.HeaderContent>

      </HeaderContainer>      

     <Jumbo />
     <AccordionContainer />
     <FooterContainer />
      
    </>
  )
}
