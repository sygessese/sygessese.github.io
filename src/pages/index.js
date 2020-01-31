import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import CvSection from '../components/CvSection'



const IndexPage = () => {

  const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: times new roman;
  padding-left: 25em;
  padding-right: 5em;
  font-size: .95em;
  margin-bottom: 3em;

  @media (max-width: 820px) {
  padding-left: 0px;
  padding-top: 10em;
  margin-bottom: 2em;
  padding-right: 0px; 
  }
  `
  const CvHeaderName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.9em;
  margin-top: 3em;

  `
  const CvHeaderDetails = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  @media (max-width: 820px) {
    margin-bottom: 2em;
    }
  `

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <CvContainer>
        <CvHeaderName>Selam Gessese</CvHeaderName>
        <CvHeaderDetails>sygessese@gmail.com | github.com/sygessese</CvHeaderDetails>
        <CvSection
          section="languages"
          contents={[{ details: "CSS, HTML, JavaScript, SQL" }]}
        />
        <CvSection
          section="frameworks/ libraries"
          contents={[{
            details: "React, Bootstrap, jQuery, Styled Components, GatsbyJS, Webpack, Babel <br> Node.js, Express, MySQL, PostgreSQL, Cassandra, MongoDB"
          }]}
        />
        <CvSection
          section="tools"
          contents={[{ details: "Git, AWS, Docker, Jest, Postman, Loader.io, Heroku" }]}
        />
        <CvSection
          section="education"
          contents={[{
            title: "Hack Reactor at Galvanize",
            date: "December 2019",
            details: "Software Engineering Immersive"
          }, {
            title: "University of Washington",
            date: "June 2017",
            details: `Bachelor of Arts in Political Science <br>
          Dean's List for Academic Achievement: <i>Winter 2016, Spring 2016, Spring 2017</i>`
          }, {
            title: "Seattle Central College",
            date: "June 2015",
            details: `Associate of Arts <br>
          Dean’s List for Academic Achievement: <i>Spring 2014, Fall 2014, Winter 2015, Spring 2015</i> <br> President and Founder: Art & Culture Club
          `}]}
        />
        <CvSection
          section="applications"
          contents={[{
            title: 'JASTdance',
            description: 'Music streaming service',
            details: `Architected a system design into production. Conducted performance evaluation on Cassandra and PostgreSQL before deploying on AWS. Configured Nginx to balance traffic across three Dockerized servers running on separate EC2 instances. Applied throughput analysis using Loader.io and New Relic to discover a bottleneck in the database.
            `,
          }, {
            title: 'Hungry',
            description: 'Crafted selection of highly rated restaurants in close proximity',
            details: `Integrated geolocation functionality and Yelp’s Graphql API to develop an iOS application with a RESTful backend using React Native, Node.js, and MongoDB.
            `,
          }, {
            title: 'Distilled',
            description: 'Clothing item detail page',
            details: `Created a web application rendered by a proxy server, serving various Dockerized React components running in separate AWS EC2 instances. Used Jest and Enzyme, and version control with Git feature branch workflow to maintain TDD. Utilized text-compression and minification to achieve 100% Google Page Speed Score.
            `,
          }]}
        />
        <CvSection
          section="experience"
          contents={[{
            title: "ACLU of WA", description: "Public Relations Assistant", date: "2018-2019", details: `Migrated local volunteer system to an online database, doubling participation; created documentation for onboarding staff. Produced the annual department report by analyzing communications activity, and determined where to divert energy and funds for the next year.
          ` }, { title: "City of Seattle", description: "Community Engagement Ambassador", date: "2018-2019", details: `Audited programs receiving grant funding. Engaged underrepresented communities on public services available to them. Provided translation services in Amharic for presentations.` }]}
        />
      </CvContainer>
    </Layout>
  )
}

export default IndexPage
