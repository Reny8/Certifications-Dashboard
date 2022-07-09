import React, { useState } from "react";
import "./UpdateModal.css";
const UpdateModal = (props) => {
  const [editModal, setEditModal] = useState("");
  const [overlayStatus, setOverlayStatus] = useState("");
  const [item, setitem] = useState(props.item)
  function showModal() {
    setEditModal("active");
    setOverlayStatus("active");
  }
  function closeModal() {
    setEditModal("");
    setOverlayStatus("");
  }
  return (
    <div>
      <button onClick={() => showModal()}>
        <img
          src="https://img.icons8.com/ios-glyphs/60/000000/edit--v1.png"
          alt="Edit Button"
        />
      </button>
      <div className={editModal} id="modal-template">
        <div className="modal-header">
          <h1>EDIT CERTIFICATION</h1>
          <button onClick={() => closeModal()} className="close-modal">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div>You have selected: {props.item.title}</div>
          <div>Edit Below:</div>
          <label>
            Image:
            <input value={item.image} />
          </label>
          <label>
            Title:
            <input value={item.title} />
          </label>
          <label>
            Description:
            <textarea value={item.description} />
          </label>
          <label>
            Date Obtained:
            <input value={item.obtained} />
          </label>
          <label>
            Expiration Date:
            <input value={item.expired} />
          </label>
          <button className="modal-save">Save Changes</button>
        </div>
      </div>
      <div className={overlayStatus} id="overlay"></div>
    </div>
  );
};

export default UpdateModal;
