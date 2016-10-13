import React, { Component } from 'react';
import Upvote from './Upvote.jsx';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
};

class ProjectView extends Component {
  render() {
    return (
      <div className="project-card" id={this.props.id}>
        <div className="col-lg-2 project-img-wrapper text-center">
          <img
            src="http://placehold.it/80/ffffff/000000"
            alt="placeholder"
            className="img-responsive img-project"
          />
        </div>
        <div className="col-lg-10">
          <h3 className="project-h3">
            {this.props.name}
          </h3>
          <p className="project-p">
            {/* {this.props.description} */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-inline">
            <li>
              <Upvote />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ProjectView.propTypes = propTypes;

export default ProjectView;
