import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Project from "../components/project";
import Typewriter from "../components/typewriter"

import FlickStash from "../images/IMG_1529.gif"
import Distilled from "../images/Distilled.gif"
import Babel from "../images/babel.png"
import Express from "../images/express.png"
import ReactImg from "../images/react.png"
import Styledc from "../images/styled.png"
import Mongo from "../images/mongo.png"
import Jest from "../images/jest.png"
import Webpack from "../images/webpack.png"
import Js from "../images/js.png"
import Enzyme from "../images/enzyme.png"
import Heroku from "../images/heroku.png"
import PostgreSQL from "../images/postgresql.png"
import ReactNat from "../images/reactnative.png"
import Mlab from "../images/mongodblab.png"
import GatsbyJS from "../images/gatsby.png"
import Docker from "../images/docker.png"
import Mongoose from "../images/mongoose.png"
import MaterialUI from "../images/material.png"
import Cassandra from "../images/cassandra.png"
import Nginx from "../images/nginx.png"
import Aws from "../images/aws.png"
import Maps from "../images/maps.png"
import GraphQL from "../images/graphql.png"
import Route53 from "../images/53.png"
import Pages from "../images/pages.png"




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
    {
      "title": "Twittok",
      "gif": null,
      "info": "Social networking site",
      "technologies": [ReactImg, Express, Mongoose, Mlab, Heroku, Styledc, MaterialUI, Babel, Webpack],
      "github": "https://github.com/sygessese/twitook",
      "live": true,
      "type": "Web Application"
    },
    {
      "title": "Jastdance",
      "gif": null,
      "info": "Comments module of a music streaming service",
      "technologies": [ReactImg, Express, Cassandra, Styledc, Webpack, Docker, Nginx, Aws],
      "github": "https://github.com/sygessese/info-comments-module",
      "live": false,
      "type": "Web Application"
    },
    {
      "title": "Distilled",
      "gif": { Distilled },
      "info": "Clothing retailer's product detail page",
      "technologies": [Babel, Js, ReactImg, Express, Mongo, Styledc, Jest, Enzyme, Webpack, Docker],
      "github": "https://github.com/Distilled-org/Selam_service",
      "live": false,
      "type": "Web Application"
    },
    {
      "title": "Hungry",
      "gif": null,
      "info": "No fuss selection of highly rated dining options near you",
      "technologies": [ReactNat, GraphQL, Maps, Express, PostgreSQL],
      "github": "https://github.com/sygessese/hungry",
      "live": false,
      "type": "IOS Mobile Application"
    },
    {
      "title": "Gessese",
      "gif": null,
      "info": "Personal Portfolio",
      "technologies": [GatsbyJS, MaterialUI, Styledc, Route53, Pages],
      "github": "https://github.com/sygessese/sygessese.github.io/",
      "live": "https://gessese.com",
      "type": "Static Website"
    },
    {
      "title": "FlickStash",
      "gif": { FlickStash },
      "info": "Save, and organize your favorite films - movie database API",
      "technologies": [ReactImg, Js, Express, PostgreSQL, Heroku, Styledc],
      "github": "https://github.com/sygessese/flickstash",
      "live": "https://flickstash.herokuapp.com/",
      "type": "Web Application"
    }
  ];

  const ProjectListRendered = ProjectList.map((p, i) => {
    return <Project title={p.title} gif={p.gif} info={p.info} technologies={p.technologies} github={p.github} live={p.live} index={i} key={i} type={p.type} />
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
