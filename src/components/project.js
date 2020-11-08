import PropTypes from "prop-types"
import React, { useState } from "react"
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
  margin-bottom: 3em;
  width: 100%;
  justify-content: center;
  '&:hover': {
    boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
    bottom: -6,
  },
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column-reverse;
  }
  `

  const GifContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin-right: 1.5em;
  margin-left: 1em;
  text-align: center;
  display: ${props => props.show ? 'display': 'none'};
  @media (max-width: 600px) {
    text-align: center;
    max-width: 100%;
    margin-top: 1em;
    margin-right: 0;
    margin-left: 0;
  }
  `

  const useStyles = makeStyles({
    card: {
      minWidth: 275,
      width: '100%',
      maxHeight: 800,
      //maxWidth: 500,
    },
    title: {
      marginBottom: 12,
      marginRight: '.5em',
      fontWeight: 100,
      fontSize: '2em',
      '@media (max-width: 600px)': {
        display: 'block',
        marginBottom: 0
      },
    },
    type: {
      fontSize: '1.5em',
      fontWeight: 100,
      '@media (max-width: 600px)': {
        display: 'block',
        marginBottom: '.5em',
      },
    },
    tech: {
      //marginBottom: 12,
      fontSize: 15,
      textTransform: 'uppercase'
    },
    cardcontent: {
      backgroundColor: 'whitesmoke',
      //minHeight: 350,
    },
    cardaction: {
      justifyContent: 'space-around',
      backgroundColor: 'lavenderblush',
      '&:hover': {
        boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
        bottom: -6,
      },
    }
  });

  const classes = useStyles();
  const techs = technologies.join(` • `)
  const [show, setShow] = useState(false);
  const toggle = () => {setShow(!show)}


  let expandbutton = show ? <Button size="small" onClick={toggle}> Collapse GIF ↑ </Button> : <Button size="small" onClick={toggle}> Expand GIF ↓ </Button>
  const githubbutton = github ? <Button size="small" href={github}>Go to Github</Button> : "";
  const livebutton = live ? <Button size="small" href={live}>View Live</Button> : "";
  const giffy = gif ? <GifContainer show={show}>
    <img src={gif[title]} style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}></img>
    </GifContainer> : ''

  return (
    <Container index={index}>
        <Card className={classes.card} raised={true}>
          <CardContent className={classes.cardcontent}>
            <Typography variant="h4" component="h2" color="textPrimary" display="inline" className={classes.title}>
              {title}
            </Typography> 
            <Typography variant="h4" component="h2" display="inline"  color="textPrimary" className={classes.type}>
              // {type}
            </Typography>
            <Typography variant="body1" component="p">
              {info}<br></br><br></br>
              {giffy}
            </Typography>
            <Typography className={classes.tech} color="textSecondary">
              {techs}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardaction}>
            {githubbutton} {livebutton} {gif ? expandbutton : ''}
          </CardActions>
        </Card>
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
