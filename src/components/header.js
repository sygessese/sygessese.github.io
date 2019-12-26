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
  font-family: monospace;
  font-size: 2em;
  `
  const Linkholder = styled.div`
  padding: 1em;
  `

  return (
    <Menubar>
      <Linkholder>
        <Link to="/projects"> /projects </Link>
      </Linkholder>

      <Linkholder>
        <Link to="/about"> /about  </Link>
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
