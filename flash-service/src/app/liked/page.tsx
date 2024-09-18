"use client";

import { RequestList } from "@/components/RequestList";

export default function Liked() {
  const demandes = [
    { label: "Demande 1", description: "Description de la demande 1." },
    { label: "Demande 2", description: "Description de la demande 2." },
    { label: "Demande 3", description: "Description de la demande 3." },
  ];

  const services = [
    { label: "Service 1", description: "Description du service 1." },
    { label: "Service 2", description: "Description du service 2." },
    { label: "Service 3", description: "Description du service 3." },
    { label: "Service 4", description: "Description du service 4." },
  ];

  return (
    <div className="p-6 space-y-8">
      <RequestList
        label="Liste des demandes"
        count={demandes.length}
        total={3}
        itemLabel="Demande"
        requests={demandes}
      />

      <RequestList
        label="Liste des services à rendre"
        count={services.length}
        total={5}
        itemLabel="Service à rendre"
        requests={services}
      />
    </div>
  );
}
