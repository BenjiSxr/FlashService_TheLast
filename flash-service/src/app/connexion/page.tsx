"use client";

import { useAuth } from "@/context/UserContext";
import { redirect } from "next/navigation";

export default function Liked() {
  const { login, user } = useAuth();
  if (user.id !== 0) {
    redirect("/");
  }
  const handleclick = () => {
    login();
  };
  return (
    <>
      <button onClick={() => handleclick()}>Connect</button>
    </>
  );
}
