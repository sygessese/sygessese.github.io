import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Portrait from "../images/portrait.png"
import Smile from "../images/smileportrait.jpg"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

// side bar menu/ navigation

const Header = props => {
  const Menubar = styled.div`
    height: 100%;
    width: 20em;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    // alternative glass shades
    // background-color: rgb(156 214 227 / 15%); 
    // background-color: #aac5c663;
    background-color: #d9e6e785; 
    backdrop-filter: blur(6px);
    box-shadow: 2px 2px 10px 6px #5b7d7e;

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
      width: 20em;
      margin: 1em;
      align-self: center;
    }
  `

  const Title = styled.div`
  font-size: 2em;
  display: block;
  margin-top: 0;
  font-family: Montserrat;
  font-weight: 400;
  justify-contents: left;
  `

  const Description = styled.div`
  font-size: 1em;
  display: block;
  padding-left: 1em;
  font-family: Montserrat;
  font-weight: 300;
  `

  const Pic = styled.img.attrs({
    src: Smile,
  })`
    width: 16em;
    height: 16em;
    object-fit: cover;
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
          <Pic />
          <Bio>
            <Title>Hello! </Title>
            <Description>
            I'm Selam, a Software Engineer based in Seattle. 
            I'm passionate about solving complex challenges, 
            and contributing to an elevated human experience. 
            I strive to leave the world a better place.
            </Description>
          </Bio>
          <CardActions>
            <ButtonGroup
              orientation="vertical"
              color="default"
              aria-label="vertical text default button group"
              fullWidth
            >
              <Button size="small" fullWidth>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Resume
                </Link>
              </Button>

              <Button
                size="small"
                href="https://github.com/sygessese"
                fullWidth
              >
                Github
              </Button>
              <Button
                size="small"
                href="https://linkedin.com/in/sygessese"
                fullWidth
              >
                LinkedIn
              </Button>
              <Button
                size="small"
                href="mailto:sygessese@gmail.com?subject=From%20Gessese.com%20&body=Hi,%20"
                fullWidth
              >
                Email
              </Button>
              <Button size="small" disabled={false} fullWidth>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  Projects
                </Link>
              </Button>
            </ButtonGroup>
          </CardActions>
        </ContentContainer>
      </Menubar>
    </div>
  )
}

export default Header
