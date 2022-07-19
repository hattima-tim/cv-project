// import { useState } from "react";
import Form from "../edu_work_form";
import "./workExperience.css";
import ExperienceFactory from "../experienceFactory";
import useExpHandler from "../hooks/useExpHandler";

function workExp({ sendDataToApp }) {
  const expHandler = useExpHandler(sendDataToApp, "workExp");

  return (
    <div className="workExp_container">
      <h2>Work Experience</h2>
      {(expHandler.state.expContainer.toString() !== "" ||
        expHandler.state.newExpIsBeingAdded === false) && (
        // [].toString()=''(an empty string)
        // newExpIsBeingAdded===false is added in upper line to show Add New
        // button when the first exp form is deleted and thus newExpIsBeingAdded
        // becomes false
        <div className="expList">
          <ExperienceFactory
            input={expHandler.method.handleInput}
            placesWhereEditIsOpen={expHandler.state.placesWhereEditIsOpen}
            expContainer={expHandler.state.expContainer}
            handleEdit={expHandler.method.handleEdit}
            handleAddNewButtonClick={expHandler.method.handleAddNewButtonClick}
            handleDelete={expHandler.method.handleDelete}
            componentIsCalledFrom="workExp"
          />
          <button
            className="addNewBtn"
            type="button"
            style={{ display: `${expHandler.state.displayStyleForAddNewBtn}` }}
            onClick={expHandler.method.handleAddNewButtonClick}
          >
            Add New
          </button>
          {/* AddNew btn is here and not in the ExperienceFactory ,to ensure
            there is a add new btn under all the exp sections */}
        </div>
      )}
      {
        expHandler.state.newExpIsBeingAdded === true && (
          <Form
            input={expHandler.method.handleInput}
            previousValues={expHandler.state.expContainer}
            handleDelete={expHandler.method.handleDelete}
            componentIsCalledFrom="workExp"
          />
        )
        // the previousValues prop in upper line is only there to prevent error in
        // the Form component which is 'previousValues is undefined'.
      }
    </div>
  );
}

export default workExp;
