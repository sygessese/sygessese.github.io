import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import gif from "../images/Coding.jpg"

const Project = ({ title, gif2, info, technologies, link, index }) => {

  const Container = styled.div`
  width: 40%;
  margin-right: ${props => props.index % 2 === 0 ? "50%" : "10%"};
  margin-left: ${props => props.index % 2 === 0 ? "10%" : "50%"};
  margin-bottom: -15em;
  height: 35em;
  @media (max-width: 700px) {
    height: 100%;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
  }
  `
  const TitleContainer = styled.div`
  position: relative;
  width: 60%;
  top: 10px;
  left: 50px;
  text-align: center;
  font-size: 40px;
  padding: .3em;
  background-color: beige;
  z-index: 30
  `

  const GifContainer = styled.div`
  height: 80%;
  width: 80%;
  background-color: grey;
  position: relative;
  top: -20px;
  z-index: 10;
  `

  const InfoContainer = styled.div`
  height: 80%;
  width: 80%;
  position: relative;
  left: 70px;
  top: -30em;
  background-color: lightgrey;
  z-index: 1;
  &:hover {
    z-index: 20;
  }
  `
  return (
    <Container index={index}>
      <TitleContainer>{title}</TitleContainer>
      <GifContainer>
        <img src={gif} style={{ height: '100%', width: '100%', objectFit: 'contain' }}></img>
      </GifContainer>
      <InfoContainer>info: {info}</InfoContainer>
    </Container>
  )
}

Project.propTypes = {
  siteTitle: PropTypes.string,
}

Project.defaultProps = {
  siteTitle: ``,
}

export default Project
