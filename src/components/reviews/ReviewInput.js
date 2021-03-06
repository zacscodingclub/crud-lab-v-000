import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    });
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
              type="text"
              value={this.state.text}
              onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" />
        </form>

        <Reviews
            store={this.props.store}
            restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
};

export default ReviewInput;
