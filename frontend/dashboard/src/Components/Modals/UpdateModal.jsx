import React from "react";
import "./UpdateModal.css"
const UpdateModal = (props) => {
  return (
    <div>
      <button>
        <img
          src="https://img.icons8.com/ios-glyphs/60/000000/edit--v1.png"
          alt="Edit Button"
        />
      </button>
      <div className="edit-modal" id="edit-modal">
        <div className="modal-header">
          <h1>Modal Example Title</h1>
          <button className="close-modal">&times;</button>
        </div>
        <div className="modal-body">Body Text....</div>
      </div>
      <div id="overlay"></div>
    </div>
  );
};

export default UpdateModal;
