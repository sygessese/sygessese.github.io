import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Glossyselfie from "../components/glossyselfie"
import SEO from "../components/seo"
import styled, { keyframes } from 'styled-components'
import email from '../images/email.png'
import Tooltip from '@material-ui/core/Tooltip';


const AboutPage = () => {

  const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 70vh;
  justify-content: center;
  align-items: center;
  font-family: 'Ibarra Real Nova';
  font-weight: 400;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    height: 90%;
    width: 90vw;
  }
  width: 90vw;
`

  const ImageContainer = styled.div`
  height: 359px;
  width: 250px;
  margin-right: 2em;
  @media (max-width: 820px) {
    width: 100%;
    margin-bottom: 1vh;
  }
  `
  const TextContainer = styled.div`
  width: 450px;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 1vh;
    padding-right: 0px;
  }
  display: flex;
  flex-direction: column;
  font-size: 1em;
  @media (max-width: 700px) {
    font-size: 1em;
  }
  `
  const Name = styled.h1`
  margin-bottom: 5px;
  margin-top: 0;
  font-size: 2em;
  @media (max-width: 820px) {
    font-size: 2em;
  }
  `
  const Swing = keyframes`
  0%, 100% { transform: rotate(-30deg); }
  20% {transform:scale(.90);}
  50% { transform: rotate(30deg); }
  80% {transform:scale(.90);}
 `
  const Icons = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center
  `

  const Icon = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 10px;

  animation: ${Swing} 10s linear infinite;
  `
  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <Container>
        <ImageContainer><Glossyselfie /></ImageContainer>
        <TextContainer>
          <Name>
            Hello!
          </Name>
          My name is Selam, and I am a software engineer based in Seattle. I am passionate about improving the human experience, and about showing people the beauty in life.
<br></br>
          My prior work involved civic engagement at the ACLU, and City of Seattle.
          Now, I develop across the stack using React, Javascript, Node, and various SQL and noSQL databases.
<br></br>
          I'm a sucker for a fresh perspective on life, and a day at the beach in a city I've never seen.


          <Icons>
            <Tooltip title="E-mail" placement="bottom-start">
              <Icon>
                <a href="mailto:sygessese@gmail.com?subject=From%20Gessese.com%20&body=Hi,%20"> <img src={email} alt="email" height="40px" width="40px" ></img>Reach out and say Hi!</a>
              </Icon>
            </Tooltip>
            <Tooltip title="E-mail" placement="bottom-start">
              <Icon>
                <a href="mailto:sygessese@gmail.com?subject=From%20Gessese.com%20&body=Hi,%20"> <img src={email} alt="email" height="40px" width="40px" ></img>Reach out and say Hi!</a>
              </Icon>
            </Tooltip>
          </Icons>
        </TextContainer>
      </Container>
    </Layout>
  )
}


export default AboutPage
