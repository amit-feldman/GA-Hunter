import React, { Component } from 'react';
import Upvote from './Upvote.jsx';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  image: React.PropTypes.string,
};

class ProjectView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: false,
    };
  }

  render() {
    return (
      <div className="project-card" id={this.props.id}>
        <div className="col-lg-2 project-img-wrapper text-center">
          <img
            src={this.props.image}
            alt="placeholder"
            className="img-project"
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
          <ul className="list-inline pull-left">
            <li>
              <Upvote
                id={this.props.id}
              />
            </li>
          </ul>
          <ul className="list-inline pull-right">
            <li>
              <button className="btn btn-xs btn-upvote">
                <i className="fa fa-pencil" />
              </button>
            </li>
            <li>
              <button className="btn btn-xs btn-upvote">
                <i className="fa fa-trash" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ProjectView.propTypes = propTypes;

export default ProjectView;
