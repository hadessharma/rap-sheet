import { useState } from "react";
import React from "react";
import { createConvict } from "../../functions/post";

const ConvictForm: React.FC = () => {
  const [name, setName] = useState<string>(""); // Initialize as an empty string

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Update the state with the input value
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      if (!name) {
        alert("Name cannot be empty!");
        return;
      }

      createConvict({ name });
      alert("Convict created successfully!");
      setName(""); // Clear the form after submission
    } catch (error) {
      console.error("Error creating convict:", error);
      alert("There was an error creating the convict.");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="p-2">
          Name:
          <input
            name="name"
            type="text"
            value={name} // Bind the input value to the state
            className="m-2 border border-black font-normal"
            onChange={handleOnChange}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-400 border border-black p-2 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConvictForm;
