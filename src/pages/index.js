import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: { eq: "glossyselfie.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>


      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

