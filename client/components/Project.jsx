import React, { Component } from 'react';
import ProjectView from './ProjectView.jsx';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  tagline: React.PropTypes.string,
  image: React.PropTypes.string,
  editButtonOnClick: React.PropTypes.func,
  deleteButtonOnClick: React.PropTypes.func,
};

class Project extends Component {
  render() {
    return (
      <li className="project">
        <ProjectView
          id={this.props.id}
          name={this.props.name}
          tagline={this.props.tagline}
          image={this.props.image}
          editButtonOnClick={this.props.editButtonOnClick}
          deleteButtonOnClick={this.props.deleteButtonOnClick}
        />
      </li>
    );
  }
}

Project.propTypes = propTypes;

export default Project;
