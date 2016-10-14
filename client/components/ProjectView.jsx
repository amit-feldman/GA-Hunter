import React, { Component } from 'react';
import Upvote from './Upvote.jsx';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  tagline: React.PropTypes.string,
  image: React.PropTypes.string,
  editButtonOnClick: React.PropTypes.func,
  deleteButtonOnClick: React.PropTypes.func,
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
            {this.props.tagline}
          </p>
          <ul className="list-inline pull-left">
            <li>
              <Upvote />
            </li>
          </ul>
          <ul className="list-inline pull-right">
            <li>
              <button className="btn btn-xs btn-upvote"
                onClick={this.props.editButtonOnClick}>
                <i className="fa fa-pencil" />
              </button>
            </li>
            <li>
              <button className="btn btn-xs btn-upvote"
                onClick={()=> {this.props.deleteButtonOnClick(this.props.id)}}>
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
