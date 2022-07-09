import React from "react";
import UpdateModal from "../Modals/UpdateModal";
import "./DisplayCertificates.css";
const DisplayCertificates = (props) => {

  return (
    <div className="around-certificates">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Obtained</th>
            <th>Expired</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.certificates.map((item) => {
            return (
              <tr key={item.id}>
                <td className="around-image">
                  <img src={item.image} alt="certification" />
                </td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td className="around-dates">{item.obtained}</td>
                <td className="around-dates">{item.expired}</td>
                <td>
                  <UpdateModal />
                </td>
                <td>
                  <button>
                    <img
                      src="https://img.icons8.com/glyph-neue/64/000000/delete-forever.png"
                      alt="Delete Button"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCertificates;
