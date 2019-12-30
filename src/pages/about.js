import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Glossyselfie from "../components/glossyselfie"
import SEO from "../components/seo"
import styled from 'styled-components'


const AboutPage = () => {

  const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 70vh;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    height: 90%;
    width: 90vw;
  }
  width: 90vw;
  `
  const ImageContainer = styled.div`
  height: 100%;
  width: 250px;
  margin-right: 10px;
  margin-top: 20px;
  @media (max-width: 820px) {
    width: 100%;
    margin-bottom: 1vh;
  }
  `
  const TextContainer = styled.div`
  width: 450px;
  padding-right: 100px;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 1vh;
    padding-right: 0px;
  }
  display: flex;
  flex-direction: column;
  font-family: Georgia;
  font-size: 1.35em;
  @media (max-width: 700px) {
    font-size: 1em;
  }
  `
  const Name = styled.h1`
  margin-bottom: 5px;
  font-size: 2em;
  @media (max-width: 820px) {
    font-size: 2em;
  }
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
          My name is Selam, and I am a software engineer based in Seattle, Washington. I am passionate about improving the human experience, and about showing people the beauty in life. My prior work involved civic engagement at the ACLU, and City of Seattle. Now, I develop across the stack using React, Javascript, Node, Mongo, and more. I'm a sucker for a fresh perspective on life, and a day at the beach in a city I've never seen. Reach out and say Hi!
        </TextContainer>
      </Container>
    </Layout>
  )
}


export default AboutPage
