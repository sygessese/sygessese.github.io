import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Project = ({ title, gif, info, technologies, github, live, index, type }) => {
  const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8em;
  width: 100%;
  justify-content: center;
    @media (max-width: 600px) {
    width: 100%;
    flex-direction: column-reverse;
  }
  `

  const GifContainer = styled.div`
  width: auto;
  height: 430px;
  margin-right: 1.5em;
  margin-left: 1em;
  text-align: right;
  @media (max-width: 600px) {
    text-align: center;
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
      marginBottom: 12,
    },
    pos: {
      marginBottom: 12,
      fontSize: 15,
    },
    cardcontent: {
      backgroundColor: 'whitesmoke',
      minHeight: 350,
    },
    cardaction: {
      justifyContent: 'space-around',
      backgroundColor: 'yellow'
    }
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const techs = technologies.join(` • `)

  const githubbutton = github ? <Button size="small" href={github}>Go to Github</Button> : "";
  const livebutton = live ? <Button size="small" href={live}>View Live</Button> : "";

  return (
    <Container index={index}>
      <GifContainer>
        <img src={gif[title]} style={{ height: '100%', width: 'auto', objectFit: 'contain' }}></img>
      </GifContainer>
      <InfoContainer>
        <Card className={classes.card} raised={true}>
          <CardContent className={classes.cardcontent}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Type: {type}
            </Typography>
            <Typography variant="h4" component="h2" color="textPrimary">
              {title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {techs}
            </Typography>
            <Typography variant="body1" component="p">
              {info}<br></br><br></br><br></br>
            </Typography>
          </CardContent>
          <CardActions className={classes.cardaction}>
            {githubbutton} {livebutton}
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
