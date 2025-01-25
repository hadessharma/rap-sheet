import React, { useState } from "react";
import { createInfraction, infractionAttribute } from "../../functions/post";

const InfractionForm: React.FC = () => {
  const [convictID, setConvictID] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [timestamp, setTimestamp] = useState<Date>();

  const handleConvictIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConvictID(Number(e.target.value));
  };
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const handleTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimestamp(new Date(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!convictID || !timestamp || !type || !status) {
      alert("Please check the form and submit again!");
      return;
    }
    const data: infractionAttribute = {
      convictID: convictID,
      type: type,
      status: status,
      timestamp: timestamp!,
    };

    await createInfraction(data);
  };
  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <div className="flex w-full items-center space-x-2">
          <label className="text-right font-bold">Convict ID:</label>
          <input
            type="number"
            name="convictID"
            value={convictID}
            className="border border-black p-3 rounded-xl text-center"
            onChange={handleConvictIDChange}
          ></input>
        </div>
        <div className="flex items-center justify-center space-x-2 w-full">
          <label className="text-right font-bold">Type:</label>
          <select
            onChange={handleTypeChange}
            value={type}
            className="border border-black p-3 text-center rounded-xl flex-grow"
          >
            <option value="">Select Type</option>
            <option value="Speeding">Speeding</option>
            <option value="Excessive Speeding">Excessive Speeding</option>
            <option value="Reckless Driving">Reckless Driving</option>
            <option value="Hit and Run">Hit and Run</option>
            <option value="Damage to Property">Damage to Property</option>
            <option value="Resisting Arrest">Resisting Arrest</option>
            <option value="Driving off Roadway">Driving off Roadway</option>
            <option value="Ramming a police vehicle">
              Ramming a police vehicle
            </option>
          </select>
        </div>
        <div className="flex space-x-2 items-center w-full ">
          <label className="text-right font-bold">Status:</label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="border border-gray-500 rounded-xl grow p-3 text-center"
          >
            <option value="">Select status</option>
            <option value="Served">Served</option>
            <option value="Unserved">Unserved</option>
          </select>
        </div>
        <div>
          <label className="text-right font-bold">Date:</label>
          <input
            type="datetime-local"
            onChange={handleTimestampChange}
            className="p-2 border border-black m-2 rounded-xl"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-blue-400 border border-black px-3 py-2 font-semibold mt-4 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InfractionForm;
