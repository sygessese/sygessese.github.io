import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      printedText: '',
      visibleCursor: true,
      count: 0,
    }
    this.updateCursor = this.updateCursor.bind(this)
    this.updateText = this.updateText.bind(this)
  }
  
  componentDidMount() {
    this.setState({text: this.props.text}, this.startShow)
  }

  updateCursor() {
    this.setState({visibleCursor: !this.state.visibleCursor, count: this.state.count+1}, this.startShow)
  }

  updateText() {
    this.setState({printedText: this.state.printedText + this.state.text[this.state.printedText.length]}, this.startShow)
  }

  async startShow() {
    if (this.state.count < 4) {
      await this.millisecondPromise(400)
      this.updateCursor()
    } else if (this.state.printedText.length !== this.state.text.length) {
      await this.millisecondPromise(200)
      this.updateText()
    } else if (this.state.count < 12) {
      await this.millisecondPromise(400)
      this.updateCursor()
    } 
  }

  millisecondPromise(ms) {
    return new Promise(resolve => setTimeout(() => {resolve()}, ms)); 
  }

  render() {
    
    return (
      <Container>
        <span>{this.state.printedText}</span>
        <Cursor visibleCursor={this.state.visibleCursor}>_</Cursor>
      </Container>
    );
  }
}

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  `
const Cursor = styled.span`
  color: 'red';
  opacity: ${props => props.visibleCursor ? 100 : 0};
`

Typewriter.propTypes = {
  text: PropTypes.string,
}

Typewriter.defaultProps = {
  text: 'Lorem ipsum',
}

export default Typewriter