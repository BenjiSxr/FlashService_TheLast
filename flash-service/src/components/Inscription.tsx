import React from "react";

const Inscription: React.FC = () => {
    return (
        <div className="mx-2">
            <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>

            <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                type="email"
                placeholder="Email"
            />
            <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                type="password"
                placeholder="Mot de passe"
            />
            <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                type="password"
                placeholder="Confirmer le mot de passe"
            />
            <button className="w-full bg-principale-700 text-white font-bold py-2 rounded-lg">
                S'inscrire
            </button>
        </div>
    );
};

export { Inscription };
