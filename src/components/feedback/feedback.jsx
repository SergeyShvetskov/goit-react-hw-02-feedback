// import css from './feedback.module.css';
import React, { Component } from 'react';

class Feedback extends Component {
  static defaultProps = {
    // options: [],
  };
  static propTypes = {
    // options: PropTypes.array.isRequired,
    // onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>

        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: 3</li>
          <li>Neutral: 2</li>
          <li>Bad: 2</li>
        </ul>
      </>
    );
  }
}

export default Feedback;
