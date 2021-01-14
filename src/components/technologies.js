import React from "react"
import styled from 'styled-components'

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

const Technologies = () => {  
  const Technologies = [ReactImg, Express, Mongoose, Mlab, Heroku, Styledc, MaterialUI, Babel, Webpack, Cassandra, Docker, Nginx, Aws, Js, Mongo, Jest, Enzyme, ReactNat, GraphQL, Maps, PostgreSQL, GatsbyJS, Route53, Pages]

  const TechnologyIcons = Technologies.map((image, id) => {
    return <img id={id} src={image} key={id} style={{ maxHeight: '4em'}} />})

  return <TechnologyIconsContainer>{TechnologyIcons}</TechnologyIconsContainer>
}

const TechnologyIconsContainer = styled.div`
padding-top: 12em;
@media (max-width: 820px) {
  padding-top: 27vw;
}
`

export default Technologies
