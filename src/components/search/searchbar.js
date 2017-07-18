import React, { Component } from 'react';


class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: 'Search...'
    };
  }
updateSearch(event) {
  this.setState({search: event.target.value.substr(0,20)})
}

  render() {
    return (
      <div>
        <input className='center-block' type='text' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
      </div>
    );
  }
}

export default Searchbar;
