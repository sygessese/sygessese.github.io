import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Project = ({ title, gif, info, technologies, link, index, type }) => {
  const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8em;
  width: 100%;
  justify-content: center;
    @media (max-width: 600px) {
    width: 90%;
    padding-left: 5%;
    flex-direction: column-reverse;
  }
  `

  const GifContainer = styled.div`
  width: 20em;
  margin-right: 2em;
  margin-left: 1em;
  text-align: right;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 1em;
    margin-right: 0;
    margin-left: 0;
  }
  `

  const InfoContainer = styled.div`
  @media (max-width: 600px) {
    width: 100%;
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
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const techs = technologies.join(` • `)

  return (
    <Container index={index}>
      <GifContainer>
        <img src={gif[title]} style={{ height: '100%', width: '100%', objectFit: 'contain' }}></img>
      </GifContainer>
      <InfoContainer>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Type: {type}
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {techs}
            </Typography>
            <Typography variant="body2" component="p">
              {info} <br></br> {info} {info} <br></br> {info} <br></br> {info}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={link}>Go to Github</Button>
          </CardActions>
        </Card>
      </InfoContainer>
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
