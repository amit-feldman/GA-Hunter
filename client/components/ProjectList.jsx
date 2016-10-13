import React, { Component } from 'react';
import request from 'superagent';
import Project from './Project.jsx';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    request.get('/api/projects')
    .then((res) => {
      this.setState({
        projects: res.body,
      });
    });
  }

  render() {
    const projectList = this.state.projects.map((project) => {
      return (
        <Project
          id={project.id}
          name={project.name}
          description={project.description}
        />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="container project-wrapper">
              <h2 className="project-title-header">
                Latest Projects
              </h2>
              <ul>
                {projectList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectList;
