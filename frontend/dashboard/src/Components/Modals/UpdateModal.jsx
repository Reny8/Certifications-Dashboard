import React,{useState} from "react";
import "./UpdateModal.css"
const UpdateModal = (props) => {
  const [editModal, setEditModal] = useState("")
  const [overlayStatus, setOverlayStatus] = useState("")
  function showModal() {
    setEditModal("active")
    setOverlayStatus("active")
  }
  return (
    <div>
      <button  onClick={()=> showModal()}>
        <img
          src="https://img.icons8.com/ios-glyphs/60/000000/edit--v1.png"
          alt="Edit Button"
        />
      </button>
      <div className={editModal} id="modal-template">
        <div className="modal-header">
          <h1>Modal Example Title</h1>
          <button className="close-modal">&times;</button>
        </div>
        <div className="modal-body">Body Text....</div>
      </div>
      <div className={overlayStatus} id="overlay"></div>
    </div>
  );
};

export default UpdateModal;
