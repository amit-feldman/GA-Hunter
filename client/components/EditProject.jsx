import React from 'react';
import { withRouter } from 'react-router';
import Form from './shared/Form.jsx';

function EditProject() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h5>
            <span className="title">Edit Project</span>
          </h5>
        </div>
        <div className="col-lg-6 col-xs-12">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default withRouter(EditProject);
