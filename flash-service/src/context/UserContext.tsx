"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "@/models/User";

type authContextType = {
  user: User;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: { id: 0, firstName: "", lastName: "", email: "", adresse: "" },
  login: () => {},
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
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    adresse: "",
  });

  const login = () => {
    setUser({
      id: 1,
      firstName: "Phillipe",
      lastName: "Bollero",
      email: "pbollero@isitech.fr",
      adresse: "29 rue Mercier, Lyon 69003",
    });
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
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
