import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const IndexPage = () => {

  const Container = styled.div`
  height: 70vh;
  font-family: Georgia;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  `
  const TextContainer = styled.div``

  const Name = styled.h1`
  margin-bottom: 0px;
  font-size: 3em;
  @media (max-width: 820px) {
    font-size: 2em;
  }
  `
  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <Container>
        <TextContainer>
          <Name>Selambanchi Gessese</Name>
          <p>Software Engineer</p>
        </TextContainer>
      </Container>

    </Layout>
  )
}

export default IndexPage
