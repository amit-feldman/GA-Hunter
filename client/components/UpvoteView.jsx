import React, { Component } from 'react';
import request from 'superagent';

const propTypes = {
  user_id: React.PropTypes.number,
  project_id: React.PropTypes.number,
};

class UpvoteView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser,
      project_id: this.props.project_id,
    };
    this.handleUpvote = this.handleUpvote.bind(this);
  }
  handleUpvote(e) {
    e.preventDefault();

    const apiUrl = 'http://localhost:3000/api/upvotes';
    const { user_id, project_id } = this.state;

    request.post(apiUrl)
    .send({
      user_id: user_id,
      project_id: project_id,
    })
    .end(() => {
      console.log('outcome of request');
    })
  }
  render() {
    return (
      <button
        className="btn btn-xs btn-upvote"
        onClick={this.handleUpvote}
      >
        <svg width="9" height="8" viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg">
          <title>Like</title>
          <path d="M9 8H0l4.5-8L9 8z" fillRule="evenodd" />
        </svg>
        &nbsp;
        66
      </button>
    );
  }
}

UpvoteView.propTypes = propTypes;

export default UpvoteView;
