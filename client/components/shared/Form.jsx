import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="row center">
        <div className="col-xs-6">
          <form className="project-form">
            <div className="form-group">
              <label
                htmlFor="name"
              >Project Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                autoFocus
                placeholder="ie: Dr. Brown's one-click order button"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="url"
              >Project URL
              </label>
              <input
                id="url"
                name="url"
                type="text"
                className="form-control"
                placeholder="https://"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="image"
              >Thumbnail image URL
              </label>
              <input
                id="image"
                name="image"
                type="text"
                className="form-control"
                placeholder="https://"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="banner"
              >Banner image URL
              </label>
              <input
                id="banner"
                name="banner"
                type="text"
                className="form-control"
                placeholder="https://"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="description"
              >Description
              </label>
              <textarea
                id="description"
                name="description"
                type="text"
                className="form-control form-textarea"
                placeholder="Some fancy description."
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="btn btn-danger btn-lg btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
