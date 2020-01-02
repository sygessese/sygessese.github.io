import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Project from "../components/project";
import coding from "../images/Coding.jpg"

const ProjectsPage = () => {
  const Container = styled.div`
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
      "gif": { coding },
      "info": "Save, and organize your favorite films - movie database API",
      "technologies": ["React", "Javascript", "Express", "PostgreSQL"],
      "link": "https://flickstash.herokuapp.com/"
    },
    {
      "title": "Hungry",
      "gif": { coding },
      "info": "Save, and organize your favorite films - movie database API",
      "technologies": ["React", "Javascript", "Express", "PostgreSQL"],
      "link": "https://flickstash.herokuapp.com/"
    },
    {
      "title": "JASTdance",
      "gif": { coding },
      "info": "Save, and organize your favorite films - movie database API",
      "technologies": ["React", "Javascript", "Express", "PostgreSQL"],
      "link": "https://flickstash.herokuapp.com/"
    }
  ];

  const ProjectListRendered = ProjectList.map((p, i) => {
    return <Project title={p.title} gif={p.gif} info={p.info} technologies={p.technologies} link={p.link} index={i} />
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
