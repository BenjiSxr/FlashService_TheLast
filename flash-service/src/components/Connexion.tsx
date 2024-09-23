import React, { useState } from "react";
import { useAuth } from "@/context/UserContext";
import { redirect } from "next/navigation";

const Connexion: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    console.log(username);
    console.log(password);
    login(username, password);
    redirect("/");
  };

  return (
    <div className="mx-2">
      <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
      <form onSubmit={handleLogin}>
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          type="text"
          placeholder="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-principale-700 text-white font-bold py-2 rounded-lg"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export { Connexion };
