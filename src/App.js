import { useState } from "react";
import GeneralInfo from "./components/generalInfo";
import EduExperience from "./components/eduExperience/eduExperience";
import WorkExperience from "./components/workExperience/workExperience";
import PrintComponent from "./components/print/printingComponent";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState("");
  const [eduExperiences, setEduExperience] = useState([]);
  const [workExperiences, setWorkExperience] = useState([]);

  const sendDataToApp = (data, from) => {
    switch (from) {
      case "generalInfo":
        setGeneralInfo(data);
        break;
      case "eduExperiences":
        setEduExperience(data);
        break;
      case "workExperiences":
        setWorkExperience(data);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1 className="projectName">Cv-Creator</h1>
      <GeneralInfo sendDataToApp={sendDataToApp} />
      <EduExperience sendDataToApp={sendDataToApp} />
      <WorkExperience sendDataToApp={sendDataToApp} />
      <PrintComponent
        generalInfo={generalInfo}
        eduExperiences={eduExperiences}
        workExperiences={workExperiences}
      />
    </div>
  );
}

export default App;
