import React, { useState } from "react";
import axios from "axios";
import "./DeleteModal.css";
import "./UpdateModal.css"
const DeleteModal = (props) => {
  const [choice, setChoice] = useState("");
  const [remove, setRemove] = useState("");
  const [deleteOverlay, setDeleteOverlay] = useState("");

  async function deleteCertificate(id) {
    try {
      if (choice.toLowerCase() === "yes") {
        await axios.delete(`https://localhost:7050/api/certification/${id}/`);
        props.getAllCertifications()
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function closeDeleteModal() {
    setRemove("");
    setDeleteOverlay("");
  }

  function showDeleteModal() {
    setRemove("active");
    setDeleteOverlay("active");
  }
  return (
    <div>
      <button onClick={() => showDeleteModal()}>
        <img
          src="https://img.icons8.com/glyph-neue/60/000000/delete-forever.png"
          alt="Delete Button"
        />
      </button>
      <div className={remove} id="delete-modal">
        <div className="modal-header">
          <h1>DELETE CERTIFICATION</h1>
          <button onClick={() => closeDeleteModal()} className="close-modal">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div>You have Selected: {props.item.title}</div>
          <div>Are you sure you would like to delete?</div>
          <input
          className="delete-input"
            type="text"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
          />
          <button
            onClick={() => deleteCertificate(props.item.id)}
            className="modal-save"
          >
            Delete
          </button>
        </div>
      </div>
      <div className={deleteOverlay} id="delete-overlay"></div>
    </div>
  );
};

export default DeleteModal;
