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
    redirect("/connexion");
  }

  const [postIndex, setPostIndex] = useState(0);
  const posts = [
    {
      id: 1,
      user: "Sarah",
      title: "Demande de Garde d'Animaux",
      description:
        "Bonjour ! Je pars en vacances et je cherche quelqu'un pour s'occuper de mon chien pendant une semaine.",
    },
    {
      id: 2,
      user: "Marc",
      title: "Besoin d'Assistance Ménagère",
      description:
        "Salut ! J'ai besoin d'aide pour le nettoyage de ma maison une fois par semaine.",
    },
    {
      id: 3,
      user: "Léa",
      title: "Cours Particulier de Langue",
      description:
        "Bonjour, je souhaite améliorer mon anglais et je cherche un professeur particulier.",
    },
    {
      id: 4,
      user: "Julien",
      title: "Réparation d'Ordinateur",
      description:
        "Mon ordinateur ne démarre plus, je cherche quelqu'un qui peut m'aider à le réparer.",
    },
    {
      id: 5,
      user: "Alice",
      title: "Coaching en Bien-être",
      description:
        "Je cherche un coach en bien-être pour m'aider à améliorer ma santé et ma forme physique.",
    },
    {
      id: 6,
      user: "Thomas",
      title: "Création de Site Web",
      description:
        "Je souhaite créer un site web pour mon business et j'ai besoin d'aide pour le concevoir.",
    },
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
          <Post
            user={posts[postIndex].user}
            title={posts[postIndex].title}
            desc={posts[postIndex].description}
          />
        </motion.div>
      </div>
      <div className="flex justify-evenly items-center w-full h-18">
        <SlideButton valid={false} onClick={() => handleSwipe("left")} />
        <SlideButton valid={true} onClick={() => handleSwipe("right")} />
      </div>
    </div>
  );
}
