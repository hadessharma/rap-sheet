import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, signOutUser } from "../auth/firebase";
import { useAppDispatch, useAppSelector } from "../store/storehooks";
import { setUser, selectUser } from "../store/features/userSlice";

const Home: React.FC = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        if (user.email) {
          const name = user.email.substring(0, 2);
          dispatch(setUser({ email: user.email, name }));
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.email) {
          const name = user.email?.substring(0, 2);
          dispatch(setUser({ email: user.email, name }));
        }
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      {user == null ? (
        <div className="border border-black rounded-xl px-10 py-24">
          <div className="p-4 text-center">
            <p className="text-3xl font-bold">LogIn</p>
          </div>
          <div className="p-3 flex flex-col">
            <label htmlFor="username" className="">
              User
            </label>
            <input
              type="text"
              id="username"
              className="border border-black text-xl"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="p-3 flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-black text-xl"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="pt-4 mt-2 flex justify-center space-x-2">
            <button
              type="submit"
              className="bg-blue-400 border-black border w-24 p-2"
              onClick={handleLogin}
            >
              LogIn
            </button>
            <button
              className="bg-blue-400 border border-black w-24 p-2"
              onClick={handleSignUp}
            >
              New User?
            </button>
            {/* <button onClick={() => console.log(user)}>check!</button> */}
          </div>
        </div>
      ) : (
        <div>Logged in as {user.email}</div>
      )}
    </div>
  );
};

export default Home;
