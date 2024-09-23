"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "@/models/User";

type authContextType = {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: { id: 0, firstName: "", lastName: "", email: "", adresse: "" },
  login: async () => false,
  logout: () => { },
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    adresse: "",
  });

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Bien préciser que la requête est du JSON
        },
        body: JSON.stringify({ email, password }), // Convertir l'objet en JSON
      });

      // Vérifie si la réponse est correcte avant de la parser
      if (!res.ok) {
        const errorMessage = await res.text(); // Récupère le texte d'erreur s'il y en a un
        console.error('Erreur de connexion:', errorMessage);
        return false;
      }

      const data = await res.json(); // Parse seulement si la réponse est correcte

      if (data.success) {
        setUser({
          id: data.user.id,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          adresse: data.user.adresse,
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setUser({ id: 0, firstName: "", lastName: "", email: "", adresse: "" });
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
