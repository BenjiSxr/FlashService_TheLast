"use client";

import RequestList from "@/components/RequestList";

export default function Liked() {
  const demandes = [
    { user: "John", title: "Assistance Ménagère", desc: "Description : Besoin d'aide pour le nettoyage de ma maison pendant mes vacances." },
    { user: "John", title: "Garde d'Animaux", desc: "Je pars en vacances et j'aurais besoin d'une personne pour surveiller et s'occuper de mon chat." },
    { user: "John", title: "Cours Particulier de Langue", desc: "J'aurais envie d'apprendre une nouvelle langue ou d'améliorer mes compétences linguistiques. Recherche un professeur particulier qui peut adapter les leçons à mes besoins et mon niveau." },
  ];

  const services = [
    { user: "David", title: "Réparation Électronique", desc: "Bonjour ! J'ai un ordinateur qui ne démarre plus, et j'ai vraiment besoin d'aide pour le faire réparer. Si quelqu'un a des compétences en réparation électronique et peut venir jeter un œil, je serais très reconnaissant !" },
    { user: "Eve", title: "Coaching en Bien-être", desc: "Salut à tous ! Je cherche un coach en bien-être pour m'aider à améliorer ma santé. J'aimerais des conseils en nutrition et un programme d'exercices adapté à mes besoins. Si quelqu'un peut m'aider, ce serait super !" },
    { user: "Frank", title: "Création de Sites Web", desc: "Bonjour ! Je souhaite créer un site web pour mon petit business, mais je ne sais pas par où commencer. Je cherche quelqu'un qui pourrait m'aider à le concevoir et le mettre en ligne. Toute aide serait appréciée !" },
    { user: "Grace", title: "Services de Jardinage", desc: "Bonjour ! J'ai un jardin qui a besoin d'un peu d'attention, et je cherche quelqu'un pour m'aider avec l'entretien. Cela inclut la taille des plantes et le désherbage. Si quelqu'un a des compétences en jardinage, faites-le moi savoir, merci !" },
  ];

  return (
    <div className="h-full px-5 flex flex-col justify-center items-center bg-gray-100">
      <RequestList
        label="Liste des demandes"
        count={demandes.length}
        total={demandes.length}
        itemLabel="Demande"
        requests={demandes}
      />

      <RequestList
        label="Liste des services à rendre"
        count={services.length}
        total={services.length}
        itemLabel="Service à rendre"
        requests={services}
      />
    </div>
  );
}
