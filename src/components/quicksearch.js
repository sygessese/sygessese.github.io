import React from "react"
import styled from "styled-components"
import QF from "../components/quickfind"

const search = new QF(400)

var Box = styled.div`
  height: 30px;
  width: 30px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: ${props => props.color};
  @media (max-width: 820px) {
    height: 15px;
    width: 15px;
  }
`
const boardConstruct = function(n) {
  var result = []
  for (var i = 0; i < n; i++) {
    var random = Math.floor(Math.random() * Math.floor(10))
    result.push(<Box color={random < 6 ? "white" : "black"} />)
  }
  return result
}

var newBoard = boardConstruct(400)

class quicksearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  percolate = function() {
    newBoard.forEach((box, index) => {
      if (box.props.color === "white") {
        if (index % 20 !== 0 && newBoard[index - 1].props.color !== "black") {
          search.union(index, index - 1)
        }
        if (index > 19 && newBoard[index - 20].props.color !== "black") {
          search.union(index, index - 20)
        }
      }
    })
    newBoard.forEach((box, index) => {
      if (search.root(index) < 20) {
        box.props.color = "blue"
      }
    })
    setTimeout(
      function() {
        this.setState({ count: this.state.count + 1 })
      }.bind(this),
      400
    )
  }

  render() {
    const Section = styled.div`
      display: flex;
      flex-wrap: wrap;
      height: 600px;
      width: 600px;
      margin: auto;
      padding-top: 10px;
      @media (max-width: 820px) {
        height: 300px;
        width: 300px;
      }
    `

    return (
      <Section>
        {newBoard}
        <button onClick={this.percolate.bind(this)}>percolate</button>
      </Section>
    )
  }
}

export default quicksearch
