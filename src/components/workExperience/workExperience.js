import { useState } from "react";
import Form from "../edu_work_form";
import "./workExperience.css";
import ExperienceFactory from "../experienceFactory";

function workExp({ sendDataToApp }) {
  const [expContainer, setExpContainer] = useState([]);
  const [placesWhereEditIsOpen, setPlacesWhereEditIsOpen] = useState([]);
  // this^ will hold all the exp that are being edited
  const [newExpIsBeingAdded, setNewExpIsBeingAdded] = useState(true);
  const [displayStyleForAddNewBtn, setDisplayStyleForAddNewBtn] = useState("");

  const handleInput = (input, editedExpNumberForEditedSubmit) => {
    if (editedExpNumberForEditedSubmit !== undefined) {
      setExpContainer((prevExpContainer) => {
        return prevExpContainer.map((exp, index) => {
          if (index === editedExpNumberForEditedSubmit) {
            // editedExpNumber is calculated based on it's index in expContainer
            return input;
            // means this input is updated/edited,so replace it with old one
          }
          return exp;
        });
      });

      setPlacesWhereEditIsOpen((prevPlacesWhereEditIsOpen) => {
        return prevPlacesWhereEditIsOpen.filter((expWhereEditisOpen) => {
          return expWhereEditisOpen[1] !== editedExpNumberForEditedSubmit;
        });
      });

      setTimeout(() => {
        sendDataToApp(expContainer, "workExperiences");
      }, 0);
    } else {
      setExpContainer((prevExpContainer) => {
        return [...prevExpContainer, input];
      });
      setNewExpIsBeingAdded(false);
      setDisplayStyleForAddNewBtn("block"); // to ensure there is a add new btn under a new exp section

      setTimeout(() => {
        sendDataToApp(expContainer, "workExperiences");
      }, 0);
    }
  };

  const handleEdit = (event) => {
    const theExpWhereEditIsHappening = expContainer[event.target.id];
    const expNumber = Number(event.target.id);
    setPlacesWhereEditIsOpen((prevPlacesWhereEditIsOpen) => {
      return [
        ...prevPlacesWhereEditIsOpen,
        [theExpWhereEditIsHappening, expNumber],
      ];
    });
  };

  const handleAddNewButtonClick = (event) => {
    const AddNewButton = event.target;
    AddNewButton.style.display = "none";
    setNewExpIsBeingAdded(true);
    setDisplayStyleForAddNewBtn("none"); // to remove the btn when it is clicked once
  };

  const handleDelete = (e) => {
    if (e.target.id !== "") {
      const indexOfExpWhoseFormBeingDeleted = Number(e.target.id);
      setExpContainer((prevExpContainer) => {
        return prevExpContainer.filter((exp, index) => {
          return index !== indexOfExpWhoseFormBeingDeleted;
        });
      });

      setPlacesWhereEditIsOpen((prevPlacesWhereEditIsOpen) => {
        return prevPlacesWhereEditIsOpen.filter((exp) => {
          return exp[1] !== indexOfExpWhoseFormBeingDeleted;
        });
      });
    } else {
      setNewExpIsBeingAdded(false);
      setDisplayStyleForAddNewBtn("block");
    }
  };

  return (
    <div className="workExp_container">
      <h2>Work Experience</h2>
      {(expContainer.toString() !== "" || newExpIsBeingAdded === false) && (
        // [].toString()=''(an empty string)
        // newExpIsBeingAdded===false is added in upper line to show Add New
        // button when the first exp form is deleted and thus newExpIsBeingAdded
        // becomes false
        <div className="expList">
          <ExperienceFactory
            input={handleInput}
            placesWhereEditIsOpen={placesWhereEditIsOpen}
            expContainer={expContainer}
            handleEdit={handleEdit}
            handleAddNewButtonClick={handleAddNewButtonClick}
            handleDelete={handleDelete}
            componentIsCalledFrom="workExp"
          />
          <button
            className="addNewBtn"
            type="button"
            style={{ display: `${displayStyleForAddNewBtn}` }}
            onClick={handleAddNewButtonClick}
          >
            Add New
          </button>
          {/* AddNew btn is here and not in the ExperienceFactory ,to ensure
            there is a add new btn under all the exp sections */}
        </div>
      )}
      {
        newExpIsBeingAdded === true && (
          <Form
            input={handleInput}
            previousValues={expContainer}
            handleDelete={handleDelete}
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
