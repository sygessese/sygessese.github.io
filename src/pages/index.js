import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CvSection from "../components/CvSection"
import Typewriter from "../components/typewriter"
import Resume from "../components/resume"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <CvContainer>
        <CvHeaderName><Typewriter text="Selambanchi Gessese" cursorColor="black"/></CvHeaderName>
        <CvHeaderDetails>
          sygessese@gmail.com | github.com/sygessese
        </CvHeaderDetails>
        {Resume.map(({section, contents}) => <CvSection section={section} contents={contents} />)}
      </CvContainer>
    </Layout>
  )
}

const CvContainer = styled.div`
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
  }`

const CvHeaderName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5em;
  margin-top: .5em;
  font-family: Suranna;
  margin-bottom: -.5em;
  @media (max-width: 1120px) {
    font-size: 2em;
    margin-top: 1.5em;
  }`

const CvHeaderDetails = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  @media (max-width: 820px) {
    margin-bottom: 2em;
  }`

export default IndexPage
