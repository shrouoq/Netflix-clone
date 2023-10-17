import React from 'react'
import data from '../fixture/faqs.json'
import Accordion from './../components/accordion/accordion';
import Opt from './../components/optForm/opt';

export default function AccordionContainer() {
  return (
    <Accordion>

        <Accordion.Title>Frequently Asked Questions</Accordion.Title>

        <Accordion.ItemsContainer>
            {
                data.map(ele => 
                    
                    <Accordion.Item key={ele.id}>
                        <Accordion.Header>
                            {ele.header}
                        </Accordion.Header>

                        <Accordion.Body>
                            {ele.body}
                        </Accordion.Body>
                    </Accordion.Item>


                    
                    )
            }
        </Accordion.ItemsContainer>

        <Opt>

        <Opt.InputContainer>
          <Opt.InputBox type='text' placeholder='email address' />
          <Opt.Btn>try it now</Opt.Btn>
        </Opt.InputContainer>

        <Opt.Text>Ready to watch? Enter your email to create or restart your membership.</Opt.Text>
        
        </Opt>
       
    </Accordion>
  )
}
