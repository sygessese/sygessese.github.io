import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Project from "../components/project";
import Hungry from "../images/Coding.jpg";
import FlickStash from "../images/IMG_1529.gif"
import Gessese from "../images/Coding.jpg"

const ProjectsPage = () => {
  const Container = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  `
  const TextContainer = styled.div`
  height: 3em;
  display: flex;
  flex-direction: row;
  font-size: 1em;
  `
  const ProjectList = [
    {
      "title": "FlickStash",
      "gif": { FlickStash },
      "info": "Save, and organize your favorite films - movie database API",
      "technologies": ["React", "Javascript", "Express", "PostgreSQL", "Heroku", "Styled Components"],
      "github": "https://github.com/sygessese/flickstash",
      "live": "https://flickstash.herokuapp.com/",
      "type": "Web Application"
    },
    {
      "title": "Hungry",
      "gif": { Hungry },
      "info": "No fuss selection of highly rated dining options near you",
      "technologies": ["ReactNative", "GraphQL", "Geolocation", "Javascript", "Express", "PostgreSQL"],
      "github": "https://github.com/sygessese/hungry",
      "live": false,
      "type": "IOS Mobile Application"
    },
    {
      "title": "Gessese",
      "gif": { Gessese },
      "info": "Personal Portfolio",
      "technologies": ["GatsbyJS", "MaterialUI", "Styled Components", "Route 53", "Github Pages"],
      "github": "https://github.com/sygessese/sygessese.github.io/",
      "live": "https://gessese.com",
      "type": "Static Website"
    }
  ];

  const ProjectListRendered = ProjectList.map((p, i) => {
    return <Project title={p.title} gif={p.gif} info={p.info} technologies={p.technologies} github={p.github} live={p.live} index={i} type={p.type} />
  })

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <Container>
        {ProjectListRendered}
      </Container>
    </Layout>
  )
}


export default ProjectsPage
