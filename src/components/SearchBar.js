import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', placeHolder: 'Entrez votre film' };
  }

  handleChange = e => {
    console.log('une saisie', e.target.value);
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder={this.state.placeHolder}
        />
      </div>
    );
  }
}

export default SearchBar;
