import Form from "../edu_work_form";
import "./eduExperience.css";
import ExperienceFactory from "../experienceFactory";
import useExpHandler from "../hooks/useExpHandler";

function eduExp({ sendDataToApp }) {
  const expHandler = useExpHandler(sendDataToApp, "eduExp");

  return (
    <div className="eduExp_container">
      <h2>Educational Experience</h2>
      {(expHandler.state.expContainer.toString() !== "" ||
        expHandler.state.newExpIsBeingAdded === false) && (
        //newExpIsBeingAdded===false is added in upper line to show Add New
        //button when the first exp form is deleted and thus newExpIsBeingAdded
        //becomes false
        <div className="expList">
          <ExperienceFactory
            input={expHandler.method.handleInput}
            placesWhereEditIsOpen={expHandler.state.placesWhereEditIsOpen}
            expContainer={expHandler.state.expContainer}
            handleEdit={expHandler.method.handleEdit}
            handleDelete={expHandler.method.handleDelete}
            componentIsCalledFrom="eduExp"
          />
          <button
            className="addNewBtn"
            style={{ display: `${expHandler.state.displayStyleForAddNewBtn}` }}
            onClick={expHandler.method.handleAddNewButtonClick}
          >
            Add New
          </button>
          {/* AddNew btn is here and not in the experienceFactory to ensure
            there is a add new btn under all the exp sections */}
        </div>
      )}
      {
        expHandler.state.newExpIsBeingAdded === true && (
          //[].toString()=''(an empty string)
          <Form
            input={expHandler.method.handleInput}
            previousValues={expHandler.state.expContainer}
            handleDelete={expHandler.method.handleDelete}
            componentIsCalledFrom="eduExp"
          />
        )
        //the previousValues prop in upper line is only there to prevent error in
        //the Form component which is previousValues is undefined.
      }
    </div>
  );
}

export default eduExp;
