import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  render(){
    return(
      <div>
        <div className="form-group col-md-8 col-md-offset-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Type here..."
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Search</button>
            </span>
          </div>
        </div>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
