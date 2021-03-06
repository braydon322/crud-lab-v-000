import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state,
    });
    this.state = {
      text: '',
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Restaurant</label>
            <br></br>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}/>
          <input
            type="submit"/>
        </form>
      </div>
     );
   }
 };

export default RestaurantInput;
