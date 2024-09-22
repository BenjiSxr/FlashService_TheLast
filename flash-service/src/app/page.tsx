"use client";

import { Post } from "@/components/Post";
import { SlideButton } from "@/components/SlideButton";
import { useAuth } from "@/context/UserContext";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useAuth();
  if (user.id === 0) {
    redirect("/connexion");
  }

  return (
    <div className="flex items-center w-full h-full flex-col bg-gray-100">
      <div className="flex justify-center items-center w-full h-5/6 py-5 ">
        <Post></Post>
      </div>
      <div className="flex justify-evenly items-center w-full h-18">
        <SlideButton valid={false} />
        <SlideButton valid={true} />
      </div>
    </div>
  );
}
