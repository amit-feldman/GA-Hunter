import React, { Component } from 'react';
import Upvote from './Upvote.jsx';

class ModalView extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid modal-container">
        <div className="banner-wrapper">
          <img
            src="http://www.fillmurray.com/1000/180"
            alt="Bill Murray 300px square"
            className="modal-banner"
          />
          <h1>Fill Murray, UXDI project 2</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <Upvote />
        </div>
        <h4>John Doe, UXDI Student, GA</h4>
        <p><em>Such and Such Project - </em>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
        <h6>Leave some feedback for John</h6>
      </div>
    );
  }
}

export default ModalView;
