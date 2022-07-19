import "./printStyle.css";
import uniqid from "uniqid";
import { forwardRef } from "react";

const ComponentToPrint = forwardRef(
  ({ generalInfo, eduExperiences, workExperiences }, ref) => {
    // forwardRef is used here to make ComponentToPrint expose it's
    // DOM node(cvContainer div) to it's parent printingComponent.
    // printingComponent is passing a ref into this component and
    // since this ref is attached to the cvContainer div, printingComponent
    // can use this div
    return (
      <div className="cvContainer" ref={ref}>
        <div className="header">
          <h1 className="name">{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
          <div className="contact">
            <p className="printItem">Email: {generalInfo.email}</p>
            <p className="printItem">Phone: {generalInfo.phone}</p>
          </div>
        </div>
        <p className="personalDetails">{generalInfo.details}</p>
        <div className="education_container">
          <h2 className="eduHeader">Education</h2>
          {eduExperiences.map((exp) => {
            const uniqKey = uniqid();
            return (
              <div key={uniqKey}>
                <div className="eduInfo">
                  <p className="printItem">{exp.titleOfStudy}</p>
                  <p className="printItem">{`${exp.schoolName} | ${exp.from}-${exp.to}`}</p>
                </div>
                <p className="eduDetails">{exp.details}</p>
              </div>
            );
          })}
        </div>

        <div className="work_container">
          <h2 className="workHeader">Work Experience</h2>
          {workExperiences.map((exp) => {
            const uniqKey = uniqid();
            return (
              <div key={uniqKey}>
                <div className="workExperiences">
                  <p className="printItem">{exp.positionTitle}</p>
                  <p className="printItem">{`${exp.companyName} | ${exp.from}-${exp.to}`}</p>
                </div>

                <p>{exp.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

export default ComponentToPrint;
