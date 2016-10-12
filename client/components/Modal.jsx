import React from 'react';
import Modal from 'react-modal';
import ProjectModalView from './ProjectModalView.jsx';

const customStyling = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(200, 200, 255, .75)',
  },
  content: {
    position: 'absolute',
    top: '3rem',
    left: '3rem',
    right: '3rem',
    bottom: '3rem',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '1rem',
  },
};

class ModalView extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.closeModal}
          style={customStyling}
        >
          <button onClick={this.closeModal}>( X )</button>
          <ProjectModalView />
        </Modal>
      </div>
    );
  }
}

export default ModalView;
