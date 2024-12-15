import React, { useState } from "react";

const Home: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username);
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="p-4">
        <p className="text-3xl font-bold">LogIn</p>
      </div>
      <div className="border border-black rounded-xl">
        <div className="p-3 flex flex-col">
          <label htmlFor="username">User</label>
          <input
            type="text"
            id="username"
            className="border border-black"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="p-3 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="p-1 flex justify-center">
          <button
            type="submit"
            className="bg-blue-400 border-black border w-24"
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
