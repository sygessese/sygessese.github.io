import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


const Header = ({ siteTitle }) => {

  const Menubar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1em;
  font-size: 1.3em;
  text-decoration: none;
  @media (max-width: 820px) {
    font-size: .8em;
  }
  `
  const Linkholder = styled.div`
  padding: 1em;
  `

  return (
    <Menubar>
      <Linkholder>
        <Link to="/about"> /about  </Link>
      </Linkholder>
      
      <Linkholder>
        <Link to="/projects"> /projects </Link>
      </Linkholder>


      <Linkholder>
        <Link to="/"> / </Link>
      </Linkholder>
    </Menubar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
