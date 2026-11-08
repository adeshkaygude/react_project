import React from "react";

// Parent Component
const PureComponent = () => {
  return (
    <div>
      <h1>Keeping Component Pure</h1>

      {/* Passing different guest values through props */}
      <Cup guest={1} />
      <Cup guest={3} />
      <Cup guest={5} />
    </div>
  );
};

// Pure Functional Component
const Cup = ({ guest }) => {
  // Same guest input always produces the same JSX output.
  // This component does not modify any external data.
  return (
    <h1>
      We have {guest} guests and we have to make {guest} cups of tea.
    </h1>
  );
};

export default PureComponent;
