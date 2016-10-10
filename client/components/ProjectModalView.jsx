import React, { Component } from 'react';

class ProjectModalView extends Component {
  // constructor is currently useless, but won't be when we make the Component
  // dynamic
  constructor() {
    super();
  }
  render() {
    // the return is dummy information, until we have a dynamic component
    // to render each project.  Also needs an eventual comment component
    // Also of note, button on line 30 doesn't do anything, and will be
    // removed with text area and h6 whenever comment component is added
    return (
      <div>
        <h3>Fill Murray, UXDI project 2</h3>
        <h4>John Doe, UXDI Student, GA</h4>
        <img
          src="http://www.fillmurray.com/300/300"
          alt="Bill Murray 300px square"
        />
        <p><em>Such and Such Project - </em>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
        <button>UpVote This Project</button>
        <h6>Leave some feedback for John</h6>
        <textarea rows="6" cols="30" />
      </div>
    );
  }
}

export default ProjectModalView;
