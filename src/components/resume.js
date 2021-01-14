const Resume = [
{
  section: 'languages',
  contents: [{ details: "CSS, HTML, JavaScript, Java, SQL" }]
},
{
  section: "frameworks/ libraries",
  contents: [{ details: "React, Bootstrap, jQuery, Styled Components, GatsbyJS, Webpack, Babel, Flux <br> Node.js, Express, MySQL, PostgreSQL, Cassandra, MongoDB"}]
},
{
  section: "tools",
  contents: [{ details: "Git, AWS, Docker, Jest, Postman, Loader.io, Heroku" }]
},
{
  section: "education",
  contents: [
            {
              title: "Hack Reactor at Galvanize",
              date: "December 2019",
              details: "Software Engineering Immersive",
            },
            {
              title: "University of Washington",
              date: "June 2017",
              details: `Bachelor of Arts in Political Science <br>
          Dean's List for Academic Achievement: <i>Winter 2016, Spring 2016, Spring 2017</i>`,
            },
            {
              title: "Seattle Central College",
              date: "June 2015",
              details: `Associate of Arts <br>
          Dean’s List for Academic Achievement: <i>Spring 2014, Fall 2014, Winter 2015, Spring 2015</i> <br> President and Founder: Art & Culture Club
          `,
            },
          ]
},
{
  section: "applications",
  contents: [
    {
      title: "Twitook",
      description:
        "Social network system with post, comment, and home feed features",
      details: `Constructed using Flux architecture with React on the front end, and JWT authentication and MongoDB on the back end.
    `,
    },
    {
      title: "JASTdance",
      description: "Music streaming service",
      details: `Architected a system design into production. Conducted performance evaluation on Cassandra and PostgreSQL before deploying on AWS. Configured Nginx to balance traffic across three Dockerized servers running on separate EC2 instances. Applied throughput analysis using Loader.io and New Relic to discover a bottleneck in the database.
    `,
    },
    {
      title: "Hungry",
      description:
        "Crafted selection of highly rated restaurants in close proximity",
      details: `Integrated geolocation functionality and Yelp’s Graphql API to develop an iOS application with a RESTful backend using React Native, Node.js, and MongoDB.
    `,
    },
    {
      title: "Distilled",
      description: "Clothing item detail page",
      details: `Created a web application rendered by a proxy server, serving various Dockerized React components running in separate AWS EC2 instances. Used Jest and Enzyme, and version control with Git feature branch workflow to maintain TDD. Utilized text-compression and minification to achieve 100% Google Page Speed Score.
    `,
    },
  ]
},
{
  section: "experience",
  contents: [
    {
      title: "ACLU of WA",
      description: "Public Relations Assistant",
      date: "2018-2019",
      details: `Migrated local volunteer system to an online database, doubling participation; created documentation for onboarding staff. Produced the annual department report by analyzing communications activity, and determined where to divert energy and funds for the next year.
  `,
    },
    {
      title: "City of Seattle",
      description: "Community Engagement Ambassador",
      date: "2018-2019",
      details: `Audited programs receiving grant funding. Engaged underrepresented communities on public services available to them. Provided translation services in Amharic for presentations.`,
    },
  ]
}
]

export default Resume