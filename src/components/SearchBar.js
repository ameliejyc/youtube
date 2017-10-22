import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // initialise state with a new object with the properties we want to record on the state
    // each instance of a class based component has its own copy of state
    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={e => this.onInputChange(e.target.value)}
        placeholder="Search videos here"/>
      </div>
    )
  }
  onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
