import React, { Component } from 'react';
import ProjectView from './ProjectView.jsx';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
};

class Project extends Component {
  render() {
    return (
      <li className="project">
        <ProjectView
          id={this.props.id}
          name={this.props.name}
          description={this.props.description}
        />
      </li>
    );
  }
}

Project.propTypes = propTypes;

export default Project;
