import { FC } from "react";
import { NavButton } from "./NavButton";
import home from "@/image/maison-web.png";
import donate from "@/image/coeur_orange.png";
import add from "@/image/plus_orange.png";
import gens from "@/image/deplacer_orange.png";

const DownBar: FC = () => {
  return (
    <div className="w-screen bg-principale-700 max-h-15 flex justify-center items-center">
      <NavButton
        label="Donation"
        link="donate"
        icone={donate}
        select={false}
      ></NavButton>
      <NavButton label="Accueil" link="" icone={home} select={true}></NavButton>
      <NavButton
        label="En Cours"
        link="liked"
        icone={gens}
        select={false}
      ></NavButton>
      <NavButton
        label="Demander"
        link="new-service"
        icone={add}
        select={false}
      ></NavButton>
    </div>
  );
};

export { DownBar };
