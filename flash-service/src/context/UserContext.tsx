"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "@/models/User";

type authContextType = {
  user: User;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: { id: 0, firstName: "", lastName: "", email: "", adresse: "" },
  login: () => false,
  logout: () => {},
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
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@gmail.com",
    adresse: "28 rue de la République",
  });

  const login = async (email: string, password: string) => {
    if (email === user.email && password === "test123") {
      await setUser({
        id: 1,
        firstName: "Jean",
        lastName: "Dupont",
        email: "jean.dupont@gmail.com",
        adresse: "28 rue de la République",
      });
      console.log(user);
      return true;
    } else return false;
  };

  const logout = () => {
    setUser({ id: 0, firstName: "", lastName: "", email: "", adresse: "" });
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
