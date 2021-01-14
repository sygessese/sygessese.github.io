import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Project = ({ title, info, github, live}) => {
  const githubbutton = github ? <Button size="small" href={github}>Github Code</Button> : "";
  const livebutton = live ? <Button size="small" href={live}>View Live</Button> : "";
  
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Description>{info}</Description> 
      </div>
      <ButtonsContainer>{githubbutton} {livebutton}</ButtonsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  width: 50%;
  padding-right: 0em;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 2em;
  font-family: Montserrat;
  font-weight: 500;
  display: block;
  margin: 0;
`

const Description = styled.h2`
  padding-left: 1em;
  padding-right: 3em;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 1em;
  display: block;
  margin-top: 0;
`

const ButtonsContainer = styled.div`
  display: flex;
`

Project.propTypes = {
  siteTitle: PropTypes.string,
}

Project.defaultProps = {
  siteTitle: ``,
}

export default Project
