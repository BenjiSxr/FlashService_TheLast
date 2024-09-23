"use client";

import { Post } from "@/components/Post";
import { SlideButton } from "@/components/SlideButton";
import { useAuth } from "@/context/UserContext";
import { redirect } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { user } = useAuth();
  if (user.id === 0) {
    console.log(user);
    redirect("/connexion");
  }

  const [postIndex, setPostIndex] = useState(0);
  const posts = [
    { id: 1, title: "Post 1", description: "Description du post 1" },
    { id: 2, title: "Post 2", description: "Description du post 2" },
    { id: 3, title: "Post 3", description: "Description du post 3" },
  ];

  const controls = useAnimation();

  // Fonction pour gérer le swipe à gauche ou à droite
  const handleSwipe = (direction: "left" | "right") => {
    controls
      .start({
        x: direction === "left" ? -1000 : 1000,
        opacity: 0,
        transition: { duration: 0.5 },
      })
      .then(() => {
        setPostIndex((prev) => (prev + 1) % posts.length);
        controls.set({ x: 0, opacity: 1 });
      });
  };

  return (
    <div className="flex items-center w-full h-full flex-col bg-gray-100">
      <div className="flex justify-center items-center w-full h-5/6 py-5">
        <motion.div
          className="w-full h-full flex justify-center items-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) {
              handleSwipe("left");
            } else if (info.offset.x > 100) {
              handleSwipe("right");
            }
          }}
          animate={controls}
        >
          <Post></Post>
        </motion.div>
      </div>
      <div className="flex justify-evenly items-center w-full h-18">
        <SlideButton valid={false} onClick={() => handleSwipe("left")} />
        <SlideButton valid={true} onClick={() => handleSwipe("right")} />
      </div>
    </div>
  );
}
