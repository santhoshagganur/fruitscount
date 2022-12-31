// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">0</span> mangoes
            <span className="count">0</span> bananas
          </h1>
          <div className="img-container">
            <div className="inner-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button type="button" className="btn">
                Eat Mango
              </button>
            </div>
            <div className="inner-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="mango"
              />
              <button type="button" className="btn">
                Eat Mango
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
