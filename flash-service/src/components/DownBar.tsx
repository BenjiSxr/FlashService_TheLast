"use client";
import { FC } from "react";
import { NavButton } from "./NavButton";
import homeB from "@/image/maison-web.png";
import home from "@/image/maison_orange.png";
import donateB from "@/image/coeur.png";
import addB from "@/image/plus.png";
import gensB from "@/image/deplacer.png";
import donate from "@/image/coeur_orange.png";
import add from "@/image/plus_orange.png";
import gens from "@/image/deplacer_orange.png";
import { usePathname } from "next/navigation";

const DownBar: FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-screen bg-principale-700 max-h-15 flex justify-center items-center">
      <NavButton
        label="Donation"
        link="donation"
        icone={pathname === "/donation" ? donateB : donate}
        select={pathname === "/donation"}
      ></NavButton>
      <NavButton
        label="Accueil"
        link=""
        icone={pathname === "/" ? homeB : home}
        select={pathname === "/"}
      ></NavButton>
      <NavButton
        label="En Cours"
        link="liked"
        icone={pathname === "/liked" ? gensB : gens}
        select={pathname === "/liked"}
      ></NavButton>
      <NavButton
        label="Demander"
        link="new-service"
        icone={pathname === "/new-service" ? addB : add}
        select={pathname === "/new-service"}
      ></NavButton>
    </div>
  );
};

export { DownBar };
