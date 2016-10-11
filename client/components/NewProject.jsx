import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Form from './shared/Form.jsx';

class NewProject extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h5>
              <span className="title">New Project</span>
            </h5>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewProject);
