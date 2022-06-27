import React from "react";
import "./DisplayCertificates.css"
const DisplayCertificates = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Obtained</th>
            <th>Expired</th>
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
                <td>{item.obtained}</td>
                <td>{item.expired}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCertificates;
