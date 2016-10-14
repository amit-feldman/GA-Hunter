import React, { Component } from 'react';
import Upvote from './Upvote.jsx';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  tagline: React.PropTypes.string,
  image: React.PropTypes.string,
  banner: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string,
};

class ModalView extends Component {
  render() {
    return (
      <div className="container-fluid modal-container">
        <div className="banner-wrapper">
          <img
            src={this.props.image}
            alt="Bill Murray 300px square"
            className="modal-banner"
          />
          <h1>{this.props.name}</h1>
          <p className="lead">
            {this.props.tagline}
          </p>
          <Upvote />
        </div>
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}

ModalView.propTypes = propTypes;

export default ModalView;
