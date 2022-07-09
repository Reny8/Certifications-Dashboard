import React from "react";
import "./DisplayCertificates.css";
const DisplayCertificates = (props) => {

  function Edit(msg, myYes) {
    try {
      prompt("What would you like to edit?\nEnter one of the following:\nImage\nTitle\nDescription\nObtained\nExpired")
    } catch (error) {
      
    }
  }
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
                  <button
                    data-toggle="modal"
                    onClick={() => {
                      Edit();
                    }}
                  >
                    <img
                      src="https://img.icons8.com/ios-glyphs/60/000000/edit--v1.png"
                      alt="Edit Button"
                    />
                  </button>
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
