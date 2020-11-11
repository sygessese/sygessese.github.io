import React from "react"
import styled from "styled-components"
import QF from "../components/quickfind"

var search = new QF(400)

var Box = styled.div`
  height: ${props => `${600 / props.size}px`};
  width: ${props => `${600 / props.size}px`};
  box-sizing: border-box;
  border: 1px solid black;
  background-color: ${props => props.color};
  @media (max-width: 820px) {
    height: ${props => `${300 / props.size}px`};
    width: ${props => `${300 / props.size}px`};
  }
`
const boardConstruct = function(n) {
  var result = []
  var m = n * n
  for (var i = 0; i < m; i++) {
    var random = Math.floor(Math.random() * Math.floor(10))
    result.push(<Box color={random < 6 ? "white" : "black"} size={n} />)
  }
  return result
}

var newBoard = boardConstruct(20)

class quicksearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      graphSize: 20,
    }
  }

  percolate = function() {
    var n = this.state.graphSize
    newBoard.forEach((box, index) => {
      if (box.props.color === "white") {
        if (index % n !== 0 && newBoard[index - 1].props.color !== "black") {
          search.union(index, index - 1)
        }
        if (index > n - 1 && newBoard[index - n].props.color !== "black") {
          search.union(index, index - n)
        }
      }
    })
    newBoard.forEach((box, index) => {
      if (search.root(index) < n) {
        box.props.color = "blue"
      }
    })
    newBoard.forEach((box, index) => {
      if (box.props.color === "white") {
        if (index % n !== 0 && newBoard[index - 1].props.color !== "black") {
          search.union(index, index - 1)
        }
        if (index > n - 1 && newBoard[index - n].props.color !== "black") {
          search.union(index, index - n)
        }
      }
    })
    newBoard.forEach((box, index) => {
      if (search.root(index) < n) {
        box.props.color = "blue"
      }
    })

    this.setState({ count: this.state.count + 1 })
  }

  reset() {
    newBoard = boardConstruct(this.state.graphSize)
    search = new QF(this.state.graphSize * this.state.graphSize)
    this.setState({ count: this.state.count + 1 })
  }

  handleChange(e) {
    this.setState({ graphSize: e.target.value }, this.reset)
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

    const ButtonRow = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-between;
    `

    return (
      <Section graphSize={this.state.graphSize}>
        {newBoard}
        <ButtonRow>
          <button onClick={this.percolate.bind(this)}>percolate</button>
          <span>
            <label for="rowsize">{"Graph size:  "}</label>

            <select
              id="size"
              onChange={this.handleChange.bind(this)}
              value={this.state.graphSize}
            >
              <option value={10}>10</option>
              <option value={20} selected="selected">
                20
              </option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
            </select>
          </span>
          <button onClick={this.reset.bind(this)}>reset</button>
        </ButtonRow>
      </Section>
    )
  }
}

export default quicksearch
