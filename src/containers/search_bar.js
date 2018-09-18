import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); // using to prevent the form from submitting as a post request when button is pressed or hitting enter.

    this.props.fetchWeather(this.state.term);
    this.setState( {term: '' } );
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); // pass in null because do not need other state of first argument.
