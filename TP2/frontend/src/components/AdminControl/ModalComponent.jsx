import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ isOpen, onClose, children }) => {
  if (!isOpen) {return null};

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;