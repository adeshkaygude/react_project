import React, { useTransition } from "react";

const UseTransitionHook = () => {
  // useTransition returns:
  // pending: true while the transition is in progress
  // startTransition: function used to start a transition
  const [pending, startTransition] = useTransition();

  // Function called when the user clicks the button
  const handleButton = () => {
    // Starts an asynchronous transition
    startTransition(async () => {
      // Creates a 3-second delay to simulate an API or loading operation
      await new Promise((res) => setTimeout(res, 3000));
    });
  };

  return (
    <div>
      <h1>useTransition Hook in React 19</h1>

      {/* 
        If pending is true, display the loading GIF.
        If pending is false, hide the loading GIF.
      */}
      {pending ? (
        <img
          style={{ height: 100, width: 100, borderRadius: 10 }}
          src="https://media.tenor.com/IfbOs_yh89AAAAAM/loading-buffering.gif"
          alt="Loading"
        />
      ) : null}

      {/* 
        Disable the button while the transition is pending.
        Change button text from Click to Loading...
      */}
      <button disabled={pending} onClick={handleButton}>
        {pending ? "Loading..." : "Click"}
      </button>
    </div>
  );
};

export default UseTransitionHook;
