import React, { Component } from 'react';
import Upvote from './Upvote.jsx';

class ProjectView extends Component {
  render() {
    return (
      <div className="project-card">
        <div className="col-lg-2 project-img-wrapper text-center">
          <img
            src="http://placehold.it/80/ffffff/000000"
            alt="placeholder"
            className="img-responsive img-project"
          />
        </div>
        <div className="col-lg-10">
          <h3 className="project-h3">
            Project Name
          </h3>
          <p className="project-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
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

export default ProjectView;
