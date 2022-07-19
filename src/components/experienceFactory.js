/* eslint-disable react/prop-types */
import uniqid from "uniqid";
import Form from "./edu_work_form";

function ExperienceFactory({
  expContainer,
  handleEdit,
  placesWhereEditIsOpen,
  input,
  handleDelete,
  componentIsCalledFrom,
}) {
  const getTodayDate = () => {
    let todayDate = new Date();
    const offset = todayDate.getTimezoneOffset();
    todayDate = new Date(todayDate.getTime() - offset * 60 * 1000);
    return todayDate.toISOString().split("T")[0];
  };

  const expList = expContainer.map((exp, index) => {
    const id = uniqid();
    const editIsOnForThisExp = placesWhereEditIsOpen.find(
      (editExp) => JSON.stringify(editExp[0]) === JSON.stringify(exp)
    );
    // editExp=[the exp being edited,it's index in expContainer]
    // editIsOnForThisExp has two possible value
    // undefined: when the current exp from map loop is not being edited
    // exp: when the current exp from map loop is being edited
    if (editIsOnForThisExp) {
      return (
        <Form
          key={id}
          editedExpNum={editIsOnForThisExp[1]}
          input={input}
          previousValues={editIsOnForThisExp[0]}
          handleDelete={handleDelete}
          componentIsCalledFrom={componentIsCalledFrom}
        />
      );
    }
    return (
      <div key={id}>
        {componentIsCalledFrom === "workExp" && (
          <>
            <p>Company Name: {exp.companyName}</p>
            <p>Position Title: {exp.positionTitle}</p>
          </>
        )}
        {componentIsCalledFrom === "eduExp" && (
          <>
            <p>School Name: {exp.schoolName}</p>
            <p>Title of study: {exp.titleOfStudy}</p>
          </>
        )}
        <p>From: {exp.from}</p>
        {getTodayDate() === exp.to ? <p>To: Present</p> : <p>To: {exp.to}</p>}
        {/* if exp.to is equal to today's date then display the date as 'present'
            else display the date */}
        <p>Details: {exp.details}</p>
        <button
          type="button"
          id={index}
          className="editBtn"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    );
  });
  return (
    <div
      className={componentIsCalledFrom === "workExp" ? "workInfo" : "eduInfo"}
    >
      {expList}
    </div>
  );
}

export default ExperienceFactory;
