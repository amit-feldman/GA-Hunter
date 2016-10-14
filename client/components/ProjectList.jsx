import React, { Component } from 'react';
import request from 'superagent';
import Project from './Project.jsx';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };

    this.editButtonOnClick = this.editButtonOnClick.bind(this);
    this.deleteButtonOnClick = this.deleteButtonOnClick.bind(this);
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    request.get('/api/projects')
    .then((res) => {
      this.setState({
        projects: res.body,
      });
    });
  }

  editButtonOnClick(id) {
    // should first reroute to new project form
    console.log(`editButtonOnClick called with id: ${id}`);
  }

  // need to get current user's id and compare it with owner of the clicked
  // project
  deleteButtonOnClick(id) {
    const url = `api/projects/${id}`;
    request.del(url)
    .end(() => {
      this.getProjects();
    });
  }

  render() {
    const projectList = this.state.projects.map((project) => {
      return (
        <Project
          key={project.id}
          id={project.id}
          name={project.name}
          tagline={project.tagline}
          description={project.description}
          image={project.image}
          banner={project.banner}
          url={project.url}
          editButtonOnClick={this.editButtonOnClick}
          deleteButtonOnClick={this.deleteButtonOnClick}
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
