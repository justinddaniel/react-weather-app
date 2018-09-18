import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); // using to prevent the form from submitting as a post request when button is pressed or hitting enter.
    
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group"> // although we are not submitting the form in browser, we are getting some functionality such as a searchbar input.
        <input
          placeholder="Get a five day forecast in your favorite citiees"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} //callback function will have wrong context of 'this' if taken onInputChange(event)
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form> // when you press enter on a child of form element, the browser automatically thinks it is submitting a form request through browser.
    );
  }
}
