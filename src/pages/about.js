import React from "react"

import Layout from "../components/layout"
import Glossyselfie from "../components/glossyselfie"
import SEO from "../components/seo"
import styled from 'styled-components'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Resume from '../images/resume.pdf'


const AboutPage = () => {

  const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 70vh;
  justify-content: center;
  align-items: center;
  font-family: 'Ibarra Real Nova';
  font-weight: 400;
  // glass effect
  backdrop-filter: blur(8px);
  background-color: rgb(196 222 237 / 25%);
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    height: 90%;
    width: 100%;
    overflow: hidden;
  }
  width: 90vw;
`

  const ImageContainer = styled.div`
  height: 359px;
  width: 250px;
  margin: 2em;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 1vh;
    height: auto;
    border: 5px white solid;
    margin-bottom: 3em;
  }
  `
  const TextContainer = styled.div`
  width: 450px;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 1vh;
    padding-right: 0px;
  }
  display: flex;
  flex-direction: column;
  font-size: 1em;
  @media (max-width: 700px) {
    font-size: 1em;
  }
  `

  const useStyles = makeStyles({
    card: {
      minWidth: 275,
      maxWidth: 500,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: '1.7rem',
      color: 'black',
      marginBottom: '0',
    },
    pos: {
      marginBottom: 12,
    },
    root: {
      display: 'flow-root',
      flexDirection: 'column',
      alignItems: 'center',
    },
    body: {
      fontSize: '.9rem',
      lineHeight: 1.2,
    }
  });

  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Gessese" lang="en" description="Portfolio" />
      <Container>
        <ImageContainer><Glossyselfie /></ImageContainer>
        <TextContainer>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Hi, my name is Selam
            </Typography>
              <Typography variant="body1" component="p" className={classes.body}>
                I am a software engineer based in Seattle, passionate about improving the human experience, and about showing people the beauty in life. I develop across the stack using React, Javascript, Node, and various databases. My prior work involved civic engagement at the ACLU, and City of Seattle. I'm a sucker for a fresh perspective on life, and a day at the beach in a city I've never seen.
            </Typography>
            </CardContent>
            <CardActions classes={{ root: classes.root }}>
              <div className={classes.root}>
                <ButtonGroup
                  orientation="vertical"
                  color="default"
                  aria-label="vertical text default button group"
                  fullWidth>
                  <Button size="small" href="https://gihub.com/sygessese" fullWidth>
                    Github: /SYGESSESE
                  </Button>
                  <Button size="small" href="mailto:sygessese@gmail.com?subject=From%20Gessese.com%20&body=Hi,%20" fullWidth>
                    E-mail: sygessese@gmail.com
                  </Button>
                  <Button size="small" href="https://linkedin.com/in/sygessese" fullWidth>
                    LinkedIn: /SYGESSESE
                  </Button>
                  <Button size="small" href={Resume} fullWidth>
                    Resume
                  </Button>
                </ButtonGroup>
              </div>
            </CardActions>
          </Card>
        </TextContainer>
      </Container>
    </Layout>
  )
}


export default AboutPage
