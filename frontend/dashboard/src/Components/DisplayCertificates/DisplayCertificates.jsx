import React from "react";
import AddCert from "../Modals/AddCert";
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
                    getAllCertifications={props.getAllCertifications}
                    item={item}
                  />
                </td>
                <td>
                  <DeleteModal
                    getAllCertifications={props.getAllCertifications}
                    item={item}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddCert getAllCertifications={props.getAllCertifications} />
    </div>
  );
};

export default DisplayCertificates;
