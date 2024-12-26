import React from "react";
import { useAppSelector } from "../store/storehooks";
import { selectUser } from "../store/features/userSlice";

const Dashboard: React.FC = () => {
  const user = useAppSelector(selectUser);

  return (
    <>
      {user == null ? (
        <div className="border border-black rounded-xl px-10 py-24 flex flex-col justify-center items-center">
          <p className="text-xl">Please Login Again!</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
