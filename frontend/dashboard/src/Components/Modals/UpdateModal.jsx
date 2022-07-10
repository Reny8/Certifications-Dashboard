import React, { useState } from "react";
import axios from "axios";
import "./UpdateModal.css";
const UpdateModal = (props) => {
  const [updated, setUpdated] = useState({
    id: props.item.id,
    obtained: props.item.obtained,
    expired: props.item.expired,
    organization: props.item.organization,
    image: props.item.image,
    title: props.item.title,
    description: props.item.description,
  })

  const [editModal, setEditModal] = useState("");
  const [overlayStatus, setOverlayStatus] = useState("");

  function showModal() {
    setEditModal("active");
    setOverlayStatus("active");
  }

  function closeModal() {
    setEditModal("");
    setOverlayStatus("");
  }

  async function editAdded(body, id) {
    try {
      await axios.put(`https://localhost:7050/api/certification/${id}/`, body);
      props.getAllCertifications()
    } catch (error) {
      console.log(error.message);
    }
  }
  function saveChanges(cert,id) {
    editAdded(cert, id);
    closeModal();
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
            <input
              type="text"
              value={updated.image}
              onChange={(e) => setUpdated({...updated, image: e.target.value})}
            />
          </label>
          <label>
            Organization:
            <input
              type="text"
              value={updated.organization}
              onChange={(e) => setUpdated({...updated, organization: e.target.value})}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={updated.title}
              onChange={(e) => setUpdated({...updated, title: e.target.value})}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              value={updated.description}
              onChange={(e) => setUpdated({...updated, description: e.target.value})}
            />
          </label>
          <label>
            Date Obtained:
            <input
              type="text"
              value={updated.obtained}
              onChange={(e) => setUpdated({...updated, obtained: e.target.value})}
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              value={updated.expired}
              onChange={(e) => setUpdated({...updated, expired: e.target.value})}
            />
          </label>
          <button onClick={() => saveChanges(updated, updated.id)} className="modal-save">
            Save Changes
          </button>
        </div>
      </div>
      <div className={overlayStatus} id="overlay"></div>
    </div>
  );
};

export default UpdateModal;
