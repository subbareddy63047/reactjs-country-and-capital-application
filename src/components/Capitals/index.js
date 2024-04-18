import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {selectedObj: countryAndCapitalsList[0]}

  changeCountry = event => {
    const selectedOne = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    this.setState({selectedObj: selectedOne[0]})
  }

  render() {
    const {selectedObj} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="input-container">
            <select value={selectedObj.id} onChange={this.changeCountry}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <spa> is capital of which country?</spa>
          </div>
          <p className="capital-text">{selectedObj.country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
