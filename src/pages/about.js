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
  align-content: space-between;
  `
  const ImageContainer = styled.div`
  width: 49%;
  `
  const TextContainer = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  font-size: 1em;
  `

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <h1>Selam Gessese,</h1>
      <p>Software Engineer</p>
      <Container>
        <ImageContainer><Glossyselfie /></ImageContainer>
        <TextContainer>
          Hi
        </TextContainer>
      </Container>
    </Layout>
  )
}


export default AboutPage
