import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import GlossySelfie from '../images/glossyselfie.jpg'

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Resume from '../images/resume.pdf'


const Header = (props) => {

  const Menubar = styled.div`
  height: 100%; 
  width: 20em; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color: gainsboro;
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    height: 12em;
    width: 100%;
    flex-direction: row;
  }
  `
  const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  @media (max-width: 820px) {
    flex-direction: row;
  }
  `

  const Bio = styled.div`
  margin: 1em;
  @media (max-width: 820px) {
    width: 18em;
    margin: 1em;
    align-self: center;
  }
  `;

  const Pic = styled.img.attrs({
    src: GlossySelfie,
  })`
  width: 16em;
  height: 16em;
  object-fit: cover;
  // border: 1px solid white;
  border-radius: 50%;
  margin: 1em;

  @media (max-width: 820px) {
    width: 9em;
    height: 9em;
    border-radius: 50%;
    margin: 0px;
    align-self: center;
  }
  `


  return (
    <div>
      <Menubar>
        <ContentContainer>
          {/* 
        <Link to="/about"> /about  </Link>
        <Link to="/projects"> /projects </Link>
        <Link to="/"> / </Link> 
        */}

          <Pic />

          <Bio>I am a software engineer based in Seattle, passionate about improving the human experience and solving the challenges people face.
            <br></br>I'm a sucker for a fresh perspective on life, and a day at the beach in a city I've never seen.</Bio>


          <CardActions>

            <ButtonGroup
              orientation="vertical"
              color="default"
              aria-label="vertical text default button group"
              fullWidth>
              <Button size="small" href="https://github.com/sygessese" fullWidth>
                Github: /SYGESSESE
                  </Button>
              <Button size="small" href="https://linkedin.com/in/sygessese" fullWidth>
                LinkedIn: /SYGESSESE
                  </Button>
              <Button size="small" href="mailto:sygessese@gmail.com?subject=From%20Gessese.com%20&body=Hi,%20" fullWidth>
                sygessese@gmail.com
                  </Button>
              <Button size="small" disabled={true} fullWidth>
                <Link to="/projects"> projects coming soon </Link>
              </Button>
            </ButtonGroup>

          </CardActions>


        </ContentContainer>
      </Menubar>
    </div>
  )
}

export default Header
