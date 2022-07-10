import React, { useState } from "react";
import axios from "axios";
import "./UpdateModal.css";
const UpdateModal = (props) => {
  const [image, setImage] = useState(props.item.image);
  const [organization, setOrganization] = useState(props.item.organization);
  const [title, setTitle] = useState(props.item.title);
  const [description, setDescription] = useState(props.item.description);
  const [obtained, setObtained] = useState(props.item.obtained);
  const [expired, setExpired] = useState(props.item.expired);
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
      axios.put(`https://localhost:7050/api/certification/${id}/`, body);
    } catch (error) {
      console.log(error.message);
    }
  }
  function saveChanges() {
    let updated = {
      id: props.item.id,
      obtained: obtained,
      expired: expired,
      organization: organization,
      image: image,
      title: title,
      description: description,
    };
    editAdded(updated, props.item.id);
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
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Organization:
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Date Obtained:
            <input
              type="text"
              value={obtained}
              onChange={(e) => setObtained(e.target.value)}
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              value={expired}
              onChange={(e) => setExpired(e.target.value)}
            />
          </label>
          <button onClick={() => saveChanges()} className="modal-save">
            Save Changes
          </button>
        </div>
      </div>
      <div className={overlayStatus} id="overlay"></div>
    </div>
  );
};

export default UpdateModal;
