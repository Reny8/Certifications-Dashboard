import React, { useState } from "react";
import axios from "axios";
import "./UpdateModal.css";
import "./AddCert.css";
const AddCert = (props) => {
  const [addModal, setAddModal] = useState("");
  const [addOverlayStatus, setAddOverlayStatus] = useState("");
  const [newCert, setNewCert] = useState({
    obtained: "",
    expired: "",
    organization: "",
    image: "",
    title: "",
    description: "",
  });
  function showAddCertModal() {
    setAddModal("active");
    setAddOverlayStatus("active");
  }

  function closeAddCertModal() {
    setAddModal("");
    setAddOverlayStatus("");
  }
  async function addNewCert(certification) {
    try {
      await axios.post("https://localhost:7050/api/certification/", certification);
      props.getAllCertifications()
    } catch (error) {
      console.log(error.message);
    }
    closeAddCertModal();
    setNewCert({
      obtained: "",
      expired: "",
      organization: "",
      image: "",
      title: "",
      description: "",
    });
  }
  return (
    <div>
      <div className="around-add-button">
        <button onClick={() => showAddCertModal()} className="add-button">
          CLICK HERE TO ADD MORE
        </button>
      </div>
      <div className={addModal} id="add-cert-modal">
        <div className="modal-header">
          <h1>ADD A CERTIFICATION</h1>
          <button onClick={() => closeAddCertModal()} className="close-modal">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div>Enter Values Below:</div>
          <label>
            Image:
            <input
              type="text"
              value={newCert.image}
              onChange={(e) =>
                setNewCert({ ...newCert, image: e.target.value })
              }
            />
          </label>
          <label>
            Organization:
            <input
              type="text"
              value={newCert.organization}
              onChange={(e) =>
                setNewCert({ ...newCert, organization: e.target.value })
              }
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={newCert.title}
              onChange={(e) =>
                setNewCert({ ...newCert, title: e.target.value })
              }
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              value={newCert.description}
              onChange={(e) =>
                setNewCert({ ...newCert, description: e.target.value })
              }
            />
          </label>
          <label>
            Date Obtained:
            <input
              type="date"
              value={newCert.obtained}
              onChange={(e) =>
                setNewCert({ ...newCert, obtained: e.target.value })
              }
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              placeholder="Enter a date or N/A"
              value={newCert.expired}
              onChange={(e) =>
                setNewCert({ ...newCert, expired: e.target.value })
              }
            />
          </label>
          <button onClick={() => addNewCert(newCert)} className="modal-save">
            Save
          </button>
        </div>
      </div>
      <div className={addOverlayStatus} id="add-overlay"></div>
    </div>
  );
};

export default AddCert;
