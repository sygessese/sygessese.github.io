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
  margin-top: 7.5vw;
  margin-bottom: 9.5vw;
  color: #5a5a5a;
  margin-left: 11vw;
  margin-right: 11vw;
  `

  return (
    <Container>
      <Header siteTitle="//" />

      <main>{children}</main>

      <footer className="footer-container">
        <p> © {new Date().getFullYear()} Gessese &middot;</p>
      </footer>

    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
