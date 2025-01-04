import React, { useState } from "react";
import { createInfraction } from "../../functions/post";

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

  const handleOnSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="flex flex-col items-center">
        <div className="flex">
          <label>Convict ID:</label>
          <input
            type="number"
            name="convictID"
            value={convictID}
            className="border border-black"
            onChange={handleConvictIDChange}
          ></input>
        </div>
        <div className="flex">
          <label>Type:</label>
          <select onChange={handleTypeChange} value={type}>
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
        <div className="flex">
          <label>Status:</label>
          <select value={status} onChange={handleStatusChange}>
            <option value="Served">Served</option>
            <option value="Unserved">Unserved</option>
          </select>
        </div>
        <div>
          <input type="datetime-local" onChange={handleTimestampChange}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InfractionForm;
