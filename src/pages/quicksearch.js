import React from "react"

import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import QS from "../components/quicksearch"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: times new roman;
  padding-left: 25em;
  padding-right: 5em;
  font-size: 0.95em;
  margin-bottom: 3em;

  @media (max-width: 820px) {
    padding-left: 0px;
    padding-top: 10em;
    margin-bottom: 2em;
    padding-right: 0px;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.9em;
  margin-top: 3em;
`

const quicksearch = () => (
  <Layout>
    <SEO title="Quick Union" />
    <Container>
      <Header>Quick Union</Header>
      <QS />
    </Container>
  </Layout>
)

export default quicksearch
