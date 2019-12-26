import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const ProjectsPage = () => {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  `

  const TextContainer = styled.div`
  height: 3em;
  display: flex;
  flex-direction: row;
  font-family: monospace;
  font-size: 1em;
  `

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <h1>Projects</h1>
      <Container>
        <TextContainer>
          Project 1
        </TextContainer>
      </Container>
    </Layout>
  )
}


export default ProjectsPage
