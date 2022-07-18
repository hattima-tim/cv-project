import { useState } from "react";
import "../../styles/form.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Form({
  editedExpNum,
  previousValues,
  input,
  handleDelete,
  componentIsCalledFrom,
}) {
  const [schoolName, setSchoolName] = useState(previousValues.schoolName || "");
  const handleSchoolChange = (e) => {
    setSchoolName(e.target.value);
  };

  const [titleOfStudy, setTitleOfStudy] = useState(
    previousValues.titleOfStudy || ""
  );
  const handleTitleOfStudyChange = (e) => {
    setTitleOfStudy(e.target.value);
  };

  const [companyName, setCompanyName] = useState(
    previousValues.companyName || ""
  );
  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  };

  const [positionTitle, setPositionTitle] = useState(
    previousValues.positionTitle || ""
  );
  const handlePositionChange = (e) => {
    setPositionTitle(e.target.value);
  };

  const [from, setFrom] = useState(previousValues.from || "");
  const handleStartDateChange = (e) => {
    setFrom(e.target.value);
  };

  const [to, setTo] = useState(previousValues.to || "");
  const handleEndDateChange = (e) => {
    setTo(e.target.value);
  };

  const [details, setDetails] = useState(previousValues.details || "");
  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedExpNumberForEditedSubmit = editedExpNum;
    if (componentIsCalledFrom === "workExp") {
      input(
        { companyName, positionTitle, from, to, details },
        editedExpNumberForEditedSubmit
      );
    } else if (componentIsCalledFrom === "eduExp") {
      input(
        { schoolName, titleOfStudy, from, to, details },
        editedExpNumberForEditedSubmit
      );
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {componentIsCalledFrom === "workExp" && (
          <>
            <TextField
              type="text"
              id="companyName"
              label="Company Name"
              value={previousValues.companyName || companyName}
              onChange={handleCompanyChange}
              variant="outlined"
              required
            />
            <TextField
              type="text"
              id="positionTitle"
              label="Position Title"
              value={previousValues.positionTitle || positionTitle}
              onChange={handlePositionChange}
              variant="outlined"
              required
            />
          </>
        )}
        {componentIsCalledFrom === "eduExp" && (
          <>
            <TextField
              type="text"
              id="schoolName"
              label="School Name"
              value={previousValues.schoolName || schoolName}
              onChange={handleSchoolChange}
              variant="outlined"
              required
            />
            <TextField
              type="text"
              id="titleOfStudy"
              label="Title of Study"
              value={previousValues.titleOfStudy || titleOfStudy}
              onChange={handleTitleOfStudyChange}
              variant="outlined"
              required
            />
          </>
        )}
        <TextField
          type="date"
          id="from"
          label="From"
          InputLabelProps={{ shrink: true }}
          value={previousValues.from || from}
          onChange={handleStartDateChange}
          variant="outlined"
          required
        />
        <TextField
          type="date"
          id="to"
          label="To"
          InputLabelProps={{ shrink: true }}
          value={previousValues.to || to}
          onChange={handleEndDateChange}
          variant="outlined"
          required
        />
        <TextField
          id="Details"
          multiline
          rows={1}
          label="Details"
          value={previousValues.details || details}
          onChange={handleDetailsChange}
          variant="outlined"
          required
        />
      </Box>
      <button type="button" className="saveBtn" onClick={handleSubmit}>
        Save
      </button>
      <button
        type="button"
        id={editedExpNum}
        className="delete"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Form;
