import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ComponentToPrint from './componentToPrint'

export default function PrintComponent() {
  let componentRef = useRef();

  return (
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <ComponentToPrint ref={(el) => (componentRef = el)} />
      </div>
  );
}

