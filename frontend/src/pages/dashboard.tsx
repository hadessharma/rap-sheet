import React, { useState } from "react";
import { useAppSelector } from "../store/storehooks";
import { selectUser } from "../store/features/userSlice";
import { Link } from "react-router-dom";
import { getAllConvicts } from "../functions/get";
import Entry from "../components/entry";

interface Convict {
  convictID: number;
  name: string;
}
const Dashboard: React.FC = () => {
  const user = useAppSelector(selectUser);
  const [convict, setConvict] = useState<Convict[]>([]);
  const getData = async () => {
    try {
      const data = await getAllConvicts();
      setConvict(data);
    } catch (error) {}
  };
  return (
    <>
      {user == null ? (
        <div className="border border-black rounded-xl px-10 py-24 flex flex-col justify-center items-center">
          <p className="text-xl">Please Login Again!</p>
          <Link to="/">LogIn</Link>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <div>Here's your Dashboard!</div>
            <button
              onClick={getData}
              className="m-4 p-2 border border-black rounded-2xl bg-blue-400 transition hover:bg-blue-600"
            >
              Get
            </button>
          </div>
          {/* TABLE */}
          <div className="flex justify-center">
            {convict.length > 0 ? (
              <table className="table-auto border-collapse border-black">
                <thead className="">
                  <tr className="">
                    <th className="border border-black px-4">Convict ID</th>
                    <th className="border border-black px-4">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {convict.map((convict) => (
                    <tr key={convict.convictID}>
                      <td className="border border-black px-4 text-center">
                        {convict.convictID}
                      </td>
                      <td className="border border-black px-4 text-center">
                        {convict.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <></>
            )}
          </div>
          <div className="pt-4">
            <Entry />
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
