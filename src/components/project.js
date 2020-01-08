import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import gif from "../images/Coding.jpg"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Project = ({ title, gif2, info, technologies, link, index }) => {

  const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5em;
  width: 100%;
  @media (max-width: 700px) {
    // height: 100%;
    width: 90%;
    padding-left: 5%;
    // margin-bottom: 0;
    flex-direction: column-reverse;
  }
  `

  const GifContainer = styled.div`
  width: 20em;
  margin-right: 2em;
  margin-left: 1em;
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 1em;
    margin-right: 0;
    margin-left: 0;
  }
  `

  const InfoContainer = styled.div`
  z-index: 1;
  &:hover {
    z-index: 20;
  }
  `
  const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container index={index}>
      <GifContainer>
        <img src={gif} style={{ height: '100%', width: '100%', objectFit: 'contain' }}></img>
      </GifContainer>
      <InfoContainer>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              app type: mobile
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              list technologies {bull} more {bull} tech
        </Typography>
            <Typography variant="body2" component="p">
              {info} <br></br> {info} <br></br> {info}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Go to Github</Button>
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
