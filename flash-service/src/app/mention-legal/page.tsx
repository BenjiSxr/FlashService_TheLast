"use client";

import React from 'react';

const MentionsLegales: React.FC = () => {
    return (
        <div className="h-full bg-gray-100 p-5 flex flex-col items-center justify-center overflow-y-scroll">
            <div className="h-full bg-white p-6 rounded-md shadow-md w-full max-w-md overflow-y-scroll">
                <h1 className="text-2xl font-bold mb-4">Mentions légales</h1>

                <h2 className="text-lg font-semibold mb-2">Propriétaire de l'application :</h2>
                <p>Flash Service (Application Open Source)</p>
                <p>Responsable de la publication : Max-Yves Mastrodicasa</p>
                <p>Adresse de contact : <a href="mailto:flashservice.contactrpi@gmail.com" className="text-blue-600">{`flashservice.contactrpi@gmail.com`}</a></p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Hébergement :</h2>
                <p>
                    Flash Service est une application open source sans locaux, hébergée via <strong>Nom du fournisseur d'hébergement</strong>.
                </p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Droits d'auteur et propriété intellectuelle :</h2>
                <p>
                    Tout le contenu de l'application Flash Service, y compris les textes, graphiques, logos, icônes et images, est la propriété exclusive de Flash Service ou de ses contributeurs open source, sauf mention contraire. Toute reproduction, distribution, modification ou exploitation de ces éléments, sans l'autorisation préalable des détenteurs des droits, est strictement interdite.
                </p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Limitation de responsabilité :</h2>
                <p>
                    L'application Flash Service ne saurait être tenue responsable des erreurs ou omissions dans les informations diffusées ou des problèmes techniques rencontrés sur l'application ou sur ses serveurs.
                </p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Protection des données personnelles :</h2>
                <p>
                    Les informations collectées dans l'application sont traitées conformément aux lois sur la protection des données en vigueur. Vous disposez d'un droit d'accès, de rectification et de suppression des informations vous concernant en envoyant un email à : <a href="mailto:flashservice.contactrpi@gmail.com" className="text-blue-600">{`flashservice.contactrpi@gmail.com`}</a>.
                </p>

                <h2 className="text-lg font-semibold mb-2 mt-4">Contact :</h2>
                <p>
                    Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:flashservice.contactrpi@gmail.com" className="text-blue-600">{`flashservice.contactrpi@gmail.com`}</a>.
                </p>
            </div>
        </div>
    );
};

export default MentionsLegales;
