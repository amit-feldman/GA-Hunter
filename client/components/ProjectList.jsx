import React from 'react';
import Project from './Project.jsx';

function ProjectList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="container project-wrapper">
            <h2 className="project-title-header">
              Latest Projects
            </h2>
            <ul>
              <Project />
              <Project />
              <Project />
              <Project />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
