"use client";
import React, { useState } from "react";
import { Connexion } from "@/components/Connexion";
import { Inscription } from "@/components/Inscription";

const AuthScreen: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-800 to-blue-800 via-purple-700">
      <div className="max-w-md mx-4 p-6 bg-white/45 rounded-lg shadow-lg backdrop-blur-md">
        {isSignUp ? <Inscription /> : <Connexion />}
      </div>

      <button
        className="mt-6 text-white hover:underline"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp
          ? "Déjà un compte ? Se connecter"
          : "Pas encore de compte ? S'inscrire"}
      </button>
    </div>
  );
};

export default AuthScreen;
