import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import peach from '../images/glossypeach.gif'


const IndexPage = () => {

  const Container = styled.div`
  height: 70vh;
  font-family: 'Ibarra Real Nova';
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  `
  const TextContainer = styled.div``

  const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: -.5em;
  font-size: 3em;
  @media (max-width: 820px) {
    font-size: 2em;
  }
  `
  const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: .5em;
  `

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <Container>
        <TextContainer>
          <IconContainer>
            <img src={peach} alt="peachy"></img>
          </IconContainer>
          <Name>Selambanchi Gessese</Name>
          <p>software engineer</p>
        </TextContainer>
      </Container>

    </Layout>
  )
}

export default IndexPage
