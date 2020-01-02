/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Container = styled.div`
  color: #5a5a5a;
  background-color: #FCEFFC;
  padding-left: 5%;
  padding-right: 5%;
  `

  const RootColor = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ibarra+Real+Nova:400,600&display=swap');
  html {
    background-color: #FCEFFC;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    }
    body{
      height: 100%;
      font-family: 'Ibarra Real Nova', serif;
    }
  `
  return (
    <Container>
      <RootColor />
      <Header siteTitle="//" />
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
