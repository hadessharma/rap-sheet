import { useState } from "react";
import React from "react";
import { createConvict } from "../../functions/post";

const ConvictForm: React.FC = () => {
  const [name, setName] = useState<string>(""); // Initialize as an empty string

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Update the state with the input value
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!name) {
        alert("Name cannot be empty!");
        return;
      }

      const res: number = await createConvict({ name });
      if (res == 1) {
        setName("");
      } else {
        alert("Convict already exists!");
      }
    } catch (error) {
      console.error("Error creating convict:", error);
      alert("There was an error creating the convict.");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="">
          <label className="p-2 font-bold">Name:</label>
          <input
            name="name"
            type="text"
            value={name} // Bind the input value to the state
            className="m-2 border border-black p-3 rounded-xl"
            onChange={handleOnChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-400 border border-black p-3 mt-4 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConvictForm;
