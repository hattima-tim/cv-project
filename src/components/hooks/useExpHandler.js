import { useState } from "react";

function useExpHandler(sendDataToApp, hookIsCalledFrom) {
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
        sendDataToApp(
          expContainer,
          hookIsCalledFrom === "workExp" ? "workExperiences" : "eduExperiences"
        );
      }, 0);
    } else {
      setExpContainer((prevExpContainer) => {
        return [...prevExpContainer, input];
      });
      setNewExpIsBeingAdded(false);
      setDisplayStyleForAddNewBtn("block"); // to ensure there is a add new btn under a new exp section

      setTimeout(() => {
        sendDataToApp(
          expContainer,
          hookIsCalledFrom === "workExp" ? "workExperiences" : "eduExperiences"
        );
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

  return {
    state: {
      expContainer,
      placesWhereEditIsOpen,
      newExpIsBeingAdded,
      displayStyleForAddNewBtn,
    },
    method: {
      handleInput,
      handleEdit,
      handleDelete,
      handleAddNewButtonClick,
    },
  };
}

export default useExpHandler;
