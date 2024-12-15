import React, { useState } from "react";

const Home: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username);
    console.log(password);
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
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
        <div className="pt-4 mt-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-400 border-black border w-24 p-2"
            onClick={handleLogin}
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
