import PropTypes from "prop-types"
import React from "react"
<<<<<<< HEAD
import styled from 'styled-components'
import CvSectionItem from './CvSectionItem'


const CvSection = ({ section, contents }) => {

  const Section = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 820px) {
    margin-left: 1em;
    margin-right: 1em;
    }
  `
  const SectionTitle = styled.div`
  font-style: italic;
  width: 10em;
  @media (max-width: 820px) {
    width: 8em;
    }
  `
  const SectionContent = styled.div`
  width: 100%;
  `
  return (
    <Section>
      <SectionTitle>
        {section}
      </SectionTitle>
=======
import styled from "styled-components"
import CvSectionItem from "./CvSectionItem"

// container for each section of resume

const CvSection = ({ section, contents }) => {
  const Section = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 820px) {
      margin-left: 1em;
      margin-right: 1em;
    }
  `
  const SectionTitle = styled.div`
    font-style: italic;
    width: 10em;
    @media (max-width: 820px) {
      width: 8em;
    }
  `
  const SectionContent = styled.div`
    width: 100%;
  `
  return (
    <Section>
      <SectionTitle>{section}</SectionTitle>
>>>>>>> master
      <SectionContent>
        {contents.map(content => {
          return <CvSectionItem item={content} />
        })}
      </SectionContent>
    </Section>
<<<<<<< HEAD

=======
>>>>>>> master
  )
}

CvSection.propTypes = {
  section: PropTypes.string,
  contents: PropTypes.array,
}

CvSection.defaultProps = {
<<<<<<< HEAD
  section: 'section-title-mission',
  contents: [{}]
=======
  section: "section-title-mission",
  contents: [{}],
>>>>>>> master
}

export default CvSection
