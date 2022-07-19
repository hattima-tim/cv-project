/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from "./form";
import "../styles/generalInfo.css";

function GeneralInfo({ sendDataToApp }) {
  const [info, setInfo] = useState("");
  const [editOn, setEditOn] = useState(false);

  const getInput = (input) => {
    setInfo(input);
    setEditOn(false);

    sendDataToApp(input, "generalInfo");
  };

  const handleEdit = () => {
    setEditOn(true);
  };

  return (
    <div className="generalInfo_container">
      <h2>General Information</h2>
      {info === "" && editOn === false && (
        <Form input={getInput} previousValues={info} />
      )}
      {info !== "" && editOn === true && (
        <Form input={getInput} previousValues={info} />
      )}
      {info !== "" && editOn === false && (
        <div className="generalInfo">
          <p>First Name: {info.firstName}</p>
          <p>Last Name: {info.lastName}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <p>Details: {info.details}</p>
          <button type="button" className="editBtn" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
