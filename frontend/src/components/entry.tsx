import React, { useState } from "react";
import { createConvict } from "../functions/post";
import ConvictForm from "./forms/convictForm";
import InfractionForm from "./forms/infractionForm";

type EntryType = "convict" | "infraction" | "";

const Entry: React.FC = () => {
  const [entryType, setEntryType] = useState<EntryType>("");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntryType(e.target.value as EntryType);
  };
  const renderFields = () => {
    switch (entryType) {
      case "convict":
        return <ConvictForm />;
      case "infraction":
        return <InfractionForm />;
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center border border-black p-4 rounded-xl ">
        <div>
          <label className="p-2 font-bold">Entry Type:</label>
          <select
            value={entryType}
            onChange={handleTypeChange}
            className="border border-black m-2 rounded-xl p-2"
          >
            <option value="">Select Type</option>
            <option value="convict">Convict</option>
            <option value="infraction">Infraction</option>
          </select>
        </div>
        {entryType && (
          <div className="p-2 border rounded-xl border-black">
            {renderFields()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Entry;
