"use client";

import { FC, useState } from "react";

type Request = {
    label: string;
    description: string;
};

type RequestListProps = {
    label: string;  // Le label principal (par exemple : "Liste des demandes", "Liste des services à rendre")
    count: number;  // Le nombre de demandes/services effectués
    total: number;  // Le nombre total de demandes/services
    itemLabel: string;  // Le label pour chaque élément de la liste (par exemple : "Demande", "Service à rendre")
    requests: Request[];  // La liste des éléments
};

const RequestList: FC<RequestListProps> = ({ label, count, total, itemLabel, requests }) => {
    // État local pour savoir quelle description est ouverte
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Fonction pour basculer l'état d'ouverture
    const toggleDescription = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="w-full my-3 p-4 border rounded-md bg-white">
            {/* Header avec le label et le compteur */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">{label}</span>
                <span className="text-sm font-medium">{`${count}/${total}`}</span>
            </div>

            {/* Liste des requêtes */}
            <div className="space-y-2">
                {requests.map((request, index) => (
                    <div key={index} className="border p-3 rounded-md   ">
                        {/* Bande avec le label de la requête/service et la flèche */}
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleDescription(index)}
                        >
                            <span className="font-medium">{`${itemLabel} ${index + 1}`}</span>
                            <button
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </button>
                        </div>

                        {/* Description déroulante */}
                        {openIndex === index && (
                            <div className="mt-2 text-sm text-gray-600">
                                {request.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export { RequestList };
