import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project";
import Typewriter from "../components/typewriter"
import Technologies from "../components/technologies"
import ProjectList from "../components/projectList"

const ProjectsPage = () => {
  const ProjectListRendered = ProjectList.map((p, i) => {
    return <Project 
              title={p.title} 
              gif={p.gif} 
              info={p.info} 
              technologies={p.technologies} 
              github={p.github} 
              live={p.live} 
              index={i} 
              key={i} 
              type={p.type} />})

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <Container>
        <Header><Typewriter text="Projects" cursorColor="black"/></Header>
        <ProjectsContainer>{ProjectListRendered}</ProjectsContainer>
        <TechnologiesContainer>
          <Header top='unset' fontSize='7em' mobileFontSize='17vw' paddingLeft='3.2em'>Technologies</Header>
          <Technologies/>
        </TechnologiesContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin-top: 0em;
  padding-left: 25em;
  padding-right: 5em;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  font-family: Montserrat;
  @media (max-width: 820px) {  
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 12em;
    margin-top: 0em;
  }`

const Header = styled.div`
  width: 100vw;
  font-size: ${props => props.fontSize ? props.fontSize : '13em'};
  margin-bottom: 0em;
  font-family: Suranna;
  margin-top: -.7;
  position: absolute;
  left: 0;
  top: ${props => props.top? props.top : 0};
  background-color: rgb(236 255 77 / 77%);
  line-height: 1.5em;
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : '1.7em'};
  line-height: .64em;
  padding-top: .64em;
  @media (max-width: 820px) {
    font-size: ${props => props.mobileFontSize ? props.mobileFontSize : '6em'};
    padding-left: 0em;
    top: ${props => props.top? props.top : '2em'};
    padding-left: 0em;
  }`

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 21em;
  @media (max-width: 820px) {
    padding-top: 9em;
  }`

const TechnologiesContainer = styled.div`
  padding-bottom: 5em;`

export default ProjectsPage
