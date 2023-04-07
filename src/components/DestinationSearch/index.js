import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchUsers = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              placeholder="Search"
              className="input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              className="search-image"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="destination-list">
            {searchUsers.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationsDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
