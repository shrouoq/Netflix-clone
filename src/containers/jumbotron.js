import React from "react";
import jumbData from '../fixture/jumbo.json'
import Jumbotron from "../components/jumotron/jumbotron";

export default function Jumbo() {
  

  return (
    
      <Jumbotron.Container>
        {
          jumbData.map(ele => (
              <Jumbotron direction={ele.direction}>
                  
                  <Jumbotron.Pane>
                    <Jumbotron.Title>{ele.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{ele.subTitle}</Jumbotron.SubTitle>
                  </Jumbotron.Pane>

                  <Jumbotron.Pane>
                    <Jumbotron.Image src={ele.image} alt={ele.alt} />
                  </Jumbotron.Pane>

              </Jumbotron>
            )
          )
        }

        
      </Jumbotron.Container>
    
  )
}
