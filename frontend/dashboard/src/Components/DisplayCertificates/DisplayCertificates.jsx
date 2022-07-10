import React from "react";
import DeleteModal from "../Modals/DeleteModal";
import UpdateModal from "../Modals/UpdateModal";
import "./DisplayCertificates.css";
const DisplayCertificates = (props) => {

  return (
    <div className="around-certificates">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>Organization</th>
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
                <td>{item.organization}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td className="around-dates">{item.obtained}</td>
                <td className="around-dates">{item.expired}</td>
                <td>
                  <UpdateModal
                    item={item}
                  />
                </td>
                <td>
                  <DeleteModal
                    item={item}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="around-add-button"><button className="add-button">ADD A NEW CERTIFCATION</button></div>
    </div>
  );
};

export default DisplayCertificates;
