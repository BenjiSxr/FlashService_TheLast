"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type test = {
  fp: number;
  setFp: (number: number) => void;
};

const authContextDefaultValues: test = {
  fp: 1800,
  setFp: () => {},
};

const FlashContext = createContext<test>(authContextDefaultValues);

export function useFlash() {
  return useContext(FlashContext);
}

type Props = {
  children: ReactNode;
};

export function FlashProvider({ children }: Props) {
  const [fp, setFp] = useState<number>(1800);

  const value = {
    fp,
    setFp,
  };

  return (
    <FlashContext.Provider value={value}>{children}</FlashContext.Provider>
  );
}
