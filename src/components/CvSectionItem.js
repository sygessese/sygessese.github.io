import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// container for each paragraph within a section of the resume, ex: single project

const CvSectionItem = ({ item }) => {
  const { title, description, date, details } = item

  const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  `
  const Title = styled.span`
    font-weight: bold;
  `
  const Description = styled.span`
    font-style: italic;
  `

  var sectionBody

  if (title === undefined) {
    //tech sections
    sectionBody = (
      <Section>
        <div dangerouslySetInnerHTML={{ __html: details }}></div>
      </Section>
    )
  } else if (date === undefined) {
    //applications section
    sectionBody = (
      <Section>
        {" "}
        <div>
          <Title>{title}</Title> <Description>{description}</Description>
        </div>{" "}
        <div dangerouslySetInnerHTML={{ __html: details }}></div>{" "}
      </Section>
    )
  } else {
    // experience and education
    sectionBody = (
      <Section>
        {" "}
        <div>
          <Title>{title}</Title> {date}
        </div>{" "}
        <div>{description}</div>
        <div dangerouslySetInnerHTML={{ __html: details }}></div>
      </Section>
    )
  }

  return <div>{sectionBody}</div>
}

CvSectionItem.propTypes = {
  // title: PropTypes.string,
  // description: PropTypes.string,
  // date: PropTypes.string,
  // details: PropTypes.string,
}

CvSectionItem.defaultProps = {
  // title: 'title-missing',
  // description: 'description-missing',
  // date: 'date-missing',
  // details: 'details-missing',
}

export default CvSectionItem
