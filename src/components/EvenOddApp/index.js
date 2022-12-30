// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    if (randomNumber <= 100) {
      this.setState(prevState => ({value: randomNumber}))
    }
  }

  render() {
    const {value} = this.state
    const displayText = value % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="even-odd-container">
          <h1 className="heading">Count {value}</h1>
          <p className="desc">Count is {displayText}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="descrip">*Increase By Random Number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
