import React from "react";
import { useAppSelector } from "../store/storehooks";
import { selectUser } from "../store/features/userSlice";
import { Link } from "react-router-dom";
import { getAllConvicts } from "../functions/get";

const Dashboard: React.FC = () => {
  const user = useAppSelector(selectUser);

  const getData = () => {
    getAllConvicts();
  };
  return (
    <>
      {user == null ? (
        <div className="border border-black rounded-xl px-10 py-24 flex flex-col justify-center items-center">
          <p className="text-xl">Please Login Again!</p>
          <Link to="/">LogIn</Link>
        </div>
      ) : (
        <div>
          <div>Here's your Dashboard!</div>
          <button onClick={getData}>Get!</button>
        </div>
      )}
    </>
  );
};

export default Dashboard;
