import FlickStash from "../images/IMG_1529.gif"
import Distilled from "../images/Distilled.gif"
import Github from "../images/github.png"

const ProjectList = [
  {
    "title": "Twittok",
    "gif": {Twittok: Github},
    "info": "Social forum system featuring threads, posts, and home feed populated with user followings. Login authentication. Architected with Flux design using React, Styled Components, MaterialUI on the front end, and Node, Express, and MongoDB on the back end. Deployed on AWS using Docker.",
    "github": "https://github.com/sygessese/twitook",
    "live": "http://18.217.73.238:8000",
    "type": "Web Application"
  },
  {
    "title": "Hungry",
    "gif": {Hungry: Github},
    "info": "Automating the task of deciding where to go for lunch. Using geolocation, instantly filters dining options using Yelp's API to those currently open, within walking distance, and with 4.5+ stars; while providing image of the top rated dish. Once choice is selected, Google Maps integration pulls up walking directions.",
    "github": "https://github.com/sygessese/hungry-app-root",
    "live": false,
    "type": "IOS Mobile Application"
  },
  {
    "title": "Jastdance",
    "gif": {Jastdance: Github},
    "info": "Comments module of a music streaming service developed with React. Features include post, delete, like, and edit comments. Nginx managing traffic for multiple Node servers and Cassandra database in AWS containers across regions. Loader.io, New Relic for stress testing.",
    "github": "https://github.com/sygessese/info-comments-module",
    "live": false,
    "type": "Web Application"
  },
  {
    "title": "Distilled",
    "gif": { Distilled },
    "info": "Clothing retailer's product detail page. A React web application rendered by a Node proxy server using Express to serve various Dockerized React components - running in separate AWS EC2 instances. Jest and Enzyme for testing.",
    "github": "https://github.com/Distilled-org/Selam_service",
    "live": false,
    "type": "Web Application"
  },
  {
    "title": "FlickStash",
    "gif": { FlickStash },
    "info": "Simple application to search ('Movie Database API') and save movies. Option to organize movies by which have been watched or not. React, Express, Node, PostgreSQL.",
    "github": "https://github.com/sygessese/flickstash",
    "live": "https://flickstash.herokuapp.com/",
    "type": "Web Application"
  } 
]; 

export default ProjectList