import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ComponentToPrint from './componentToPrint'

export default function PrintComponent(props) {
  let componentRef = useRef();

  return (
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button className="printBtn">Save As Pdf</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
      <div style={{display:'none'}}>
        <ComponentToPrint
          generalInfo={props.generalInfo}
          eduExperiences={props.eduExperiences}
          workExperiences={props.workExperiences}
          ref={(el) => (componentRef = el)} />
        </div>
      </div>
  );
}

