import React from "react";
import { useFormStatus } from "react-dom";

// Child component that reads the parent form's submission status.
// NOTE: useFormStatus must be called from a component rendered inside a <form>.
function CustomForm() {
  // useFormStatus provides information about the form submission
  // 'pending' is true while the form action is executing (e.g., during async network calls)
  const { pending } = useFormStatus();

  return (
    <div>
      {/* Added name="username" so formData.get("username") can retrieve the input value */}
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
      />
      <br />
      <br />

      {/* Added name="password" so formData.get("password") can retrieve the input value */}
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <br />
      <br />

      {/* Disable button while pending to prevent duplicate submissions */}
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}

// Parent component with React 19 form action
function UseFormStatusHook() {
  // Async form action handler that receives browser FormData
  const handleSubmit = async (formData) => {
    // Simulate an async API call with a 2-second delay
    await new Promise((res) => setTimeout(res, 2000));

    console.log("Name:", formData.get("username"));
    console.log("Password:", formData.get("password"));
    console.log("Form submitted successfully!");
  };

  return (
    <div>
      <h1>useFormStatus Hook in React 19</h1>

      {/* React 19 allows passing async handlers directly to form action */}
      <form action={handleSubmit}>
        <CustomForm />
      </form>
    </div>
  );
}

export default UseFormStatusHook;
