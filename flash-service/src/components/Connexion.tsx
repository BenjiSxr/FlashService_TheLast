import React, { useState } from "react";
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const Connexion: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const success = await login(email, password);
        if (success) {
            router.push("/");
        } else {
            alert("Identifiants incorrects");
        }
    };

    return (
        <div className="mx-2">
            <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
            <form onSubmit={handleLogin}>
                <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-principale-700 text-white font-bold py-2 rounded-lg"
                >
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export { Connexion };
