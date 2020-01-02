import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


const NameText = ({ letter }) => {

  const LetterStyle = styled.a`
  &:hover {
    color: #EC966C;
  }
  `
  return (

    <LetterStyle>{letter}</LetterStyle>

  )
}

NameText.propTypes = {
  siteTitle: PropTypes.string,
}

NameText.defaultProps = {
  siteTitle: ``,
}

export default NameText
