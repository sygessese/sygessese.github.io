import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Project from "../components/project";
import Hungry from "../images/Coding.jpg";
import FlickStash from "../images/IMG_1529.gif"
import Gessese from "../images/Coding.jpg"
import Distilled from "../images/Distilled.gif"
import Typewriter from "../components/typewriter"

const ProjectsPage = () => {
  const Container = styled.div`
    margin-top: 5em;
    padding-left: 25em;
    padding-right: 5em;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    @media (max-width: 820px) {  
      padding-left: 1em;
      padding-right: 1em;
      padding-top: 14em;
      margin-top: 0em;
  `
  const Header = styled.div`
    width: 100%;
    font-size: 2em;
    margin-bottom: .5em;
  `

  const ProjectList = [
    // {
    //   "title": "Twittok",
    //   "gif": { Distilled },
    //   "info": "Social networking site",
    //   "technologies": ["React", "Express", "Mongoose", "MongoDBLab","Heroku", "Flex", "Styled Components", "Babel", "Jest", "Enzyme", "Webpack", "ESLint"],
    //   "github": "https://github.com/Distilled-org/Selam_service",
    //   "live": true,
    //   "type": "Web Application"
    // },
    {
      "title": "Distilled",
      "gif": { Distilled },
      "info": "Clothing retailer's product detail page",
      "technologies": ["React", "Express", "MongoDB", "Styled Components", "Babel", "Jest", "Enzyme", "Webpack", "ESLint"],
      "github": "https://github.com/Distilled-org/Selam_service",
      "live": false,
      "type": "Web Application"
    },
    {
      "title": "Hungry",
      "gif": null,
      "info": "No fuss selection of highly rated dining options near you",
      "technologies": ["ReactNative", "GraphQL", "Geolocation", "Javascript", "Express", "PostgreSQL"],
      "github": "https://github.com/sygessese/hungry",
      "live": false,
      "type": "IOS Mobile Application"
    },
    {
      "title": "Gessese",
      "gif": null,
      "info": "Personal Portfolio",
      "technologies": ["GatsbyJS", "MaterialUI", "Styled Components", "Route 53", "Github Pages"],
      "github": "https://github.com/sygessese/sygessese.github.io/",
      "live": "https://gessese.com",
      "type": "Static Website"
    },
    {
      "title": "FlickStash",
      "gif": { FlickStash },
      "info": "Save, and organize your favorite films - movie database API",
      "technologies": ["React", "Javascript", "Express", "PostgreSQL", "Heroku", "Styled Components"],
      "github": "https://github.com/sygessese/flickstash",
      "live": "https://flickstash.herokuapp.com/",
      "type": "Web Application"
    }
  ];

  const ProjectListRendered = ProjectList.map((p, i) => {
    return <Project title={p.title} gif={p.gif} info={p.info} technologies={p.technologies} github={p.github} live={p.live} index={i} type={p.type} />
  })

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <Container>
        <Header><Typewriter text="Projects" cursorColor="lavenderblush"/></Header>
        {ProjectListRendered}
      </Container>
    </Layout>
  )
}


export default ProjectsPage
