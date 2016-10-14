import React, { Component } from 'react';
import UpvoteView from './UpvoteView.jsx';

const propTypes = {
  id: React.PropTypes.number,
}

class Upvote extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <UpvoteView
        project_id={this.props.id}
      />
    );
  }
}

Upvote.propTypes = propTypes;

export default Upvote;
