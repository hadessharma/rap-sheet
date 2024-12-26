import React, { useState } from "react";

type EntryType = "convict" | "infraction" | "";

const Entry: React.FC = () => {
  const [entryType, setEntryType] = useState<EntryType>("");

  const handleSubmit = () => {};

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntryType(e.target.value as EntryType);
  };
  const renderFields = () => {
    switch (entryType) {
      case "convict":
        return (
          <div>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </div>
        );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Entry Type:
          <select value={entryType} onChange={handleTypeChange}>
            <option value="">Select Type</option>
            <option value="convict">Convict</option>
            <option value="infraction">Infraction</option>
          </select>
        </label>

        <div className="form-fields">{renderFields()}</div>
        {entryType && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default Entry;
