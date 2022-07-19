/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/form.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Form({ input, previousValues }) {
  const [firstName, setFirstName] = useState(previousValues.firstName || "");
  // this Form component mounts and unmounts multiple times, so the state
  // gets lost. By writing 'previousValues.firstName' we are reading
  // previously lost firstName state.
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useState(previousValues.lastName || "");
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const [email, setEmail] = useState(previousValues.email || "");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [phone, setPhone] = useState(previousValues.phone || "");
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const [details, setDetails] = useState(previousValues.details || "");
  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    input({ firstName, lastName, email, phone, details });
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
        <TextField
          type="text"
          id="First Name"
          label="First Name"
          value={previousValues.firstName || firstName}
          onChange={handleFirstNameChange}
          variant="outlined"
          required
        />
        <TextField
          type="text"
          id="Last Name"
          label="Last Name"
          value={previousValues.lastName || lastName}
          onChange={handleLastNameChange}
          variant="outlined"
          required
        />
        <TextField
          type="email"
          id="Email"
          label="Email"
          value={previousValues.email || email}
          onChange={handleEmailChange}
          variant="outlined"
          required
        />
        <TextField
          type="number"
          id="Phone"
          label="Phone"
          value={previousValues.phone || phone}
          onChange={handlePhoneChange}
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
    </div>
  );
}

export default Form;
