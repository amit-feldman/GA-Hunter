import React, { Component } from 'react';
import Modal from 'react-modal';
import Upvote from './Upvote.jsx';
import ModalView from './ModalView.jsx';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  tagline: React.PropTypes.string,
  image: React.PropTypes.string,
  banner: React.PropTypes.string,
  description: React.PropTypes.string,
  url: React.PropTypes.string,
  editButtonOnClick: React.PropTypes.func,
  deleteButtonOnClick: React.PropTypes.func,
};

const customStyling = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'hsla(0, 0%, 97%, .8)',
  },
  content: {
    position: 'absolute',
    top: '0rem',
    left: '0rem',
    right: '0rem',
    bottom: '0rem',
    border: '1px solid #ccc',
    background: 'hsla(0, 0%, 97%, .8)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none',
    padding: '1rem',
  },
};

class ProjectView extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.confirmDelete = this.confirmDelete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  confirmDelete(e) {
    e.preventDefault();

    const option = confirm('Are you sure?');

    if (option) {
      this.props.deleteButtonOnClick(this.props.id);
    }
  }

  openModal() {
    this.setState({
      open: true,
    });
  }

  closeModal() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div className="project-card" id={this.props.id}>
        <div className="col-lg-2 project-img-wrapper text-center">
          <img
            src={this.props.image}
            alt="placeholder"
            className="img-project"
            onClick={this.openModal}
          />
        </div>
        <div className="col-lg-10">
          <h3 className="project-h3" onClick={this.openModal}>
            {this.props.name}
          </h3>
          <p className="project-p" onClick={this.openModal}>
            {this.props.tagline}
          </p>
          <ul className="list-inline pull-left">
            <li>
              <Upvote
                id={this.props.id}
              />
            </li>
          </ul>
          <ul className="list-inline pull-right">
            <li>
              <button
                className="btn btn-xs btn-upvote"
                onClick={() => { this.props.editButtonOnClick(this.props.id); }}
              ><i className="fa fa-pencil" />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-upvote"
                onClick={this.confirmDelete}
              ><i className="fa fa-trash" />
              </button>
            </li>
          </ul>
        </div>
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
          style={customStyling}
        >
          <div className="col-lg-12">
            <button
              onClick={this.closeModal}
              className="btn btn-danger btn-modal btn-lg pull-left"
            ><i className="fa fa-times" />
            </button>
          </div>
          <div className="col-lg-12">
            <ModalView
              id={this.props.id}
              name={this.props.name}
              tagline={this.props.tagline}
              image={this.props.image}
              banner={this.props.banner}
              description={this.props.description}
              url={this.props.url}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

ProjectView.propTypes = propTypes;

export default ProjectView;
