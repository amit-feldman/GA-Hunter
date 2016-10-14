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
            src={this.props.banner}
            alt="Bill Murray 300px square"
            className="modal-banner"
          />
          <h1>{this.props.name}</h1>
          <p className="lead">
            {this.props.tagline}
          </p>
          <ul className="list-inline">
            <Upvote />
            <a
              className="btn btn-primary btn-get btn-xs"
              href={this.props.url}
              target="_blank"
              rel="noopener noreferrer"
            >Get it
            </a>
          </ul>
        </div>
        <div className="col-lg-6">
          <h3 className="title">
            Project description:
          </h3>
          <p>
            {this.props.description}
          </p>
        </div>
        <div>
          <h3 className="title">
            Comments:
          </h3>
          <div className="col-lg-6">
            <textarea
              className="form-control comment-box"
              placeholder="Add interesting comment"
            />
            <button
              className="btn btn-danger btn-comment pull-right"
            >Post Comment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ModalView.propTypes = propTypes;

export default ModalView;
