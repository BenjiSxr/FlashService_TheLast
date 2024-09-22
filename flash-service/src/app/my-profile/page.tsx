"use client";
import React, { useState } from 'react';
import { ProfileImg } from "../../components/ProfileImg";
import { useAuth } from '@/context/UserContext';
import Link from 'next/link';
import Image from 'next/image';
import mentionOrange from "@/image/legal-orange.png"
import deconnexionOrange from "@/image/deconnexion-orange.png"
import profile from "@/image/test.jpg";
import deleteOrange from "@/image/effacer-orange.png"


interface UserProfile {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    description: string;
    birthdate: string;
    email: string;
    password: string;
    phone: string;
}

const ProfilePage: React.FC = () => {
    const { logout } = useAuth();
    const [userData, setUserData] = useState<UserProfile>({
        firstName: "John",
        lastName: "Doe",
        address: "123 Rue de Paris",
        city: "Lyon",
        description: "Développeur passionné",
        birthdate: "01/07/1999",
        email: "johndoe@example.com",
        password: "test",
        phone: "07-78-13-35-50"
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="bg-gray-100 p-5 flex flex-col items-center justify-center overflow-y-scroll">
            <div className="h-full bg-white p-6 rounded-md shadow-md w-full max-w-md overflow-y-scroll">
                <div className="flex flex-col items-center mb-4">
                    <ProfileImg img={profile} width={125} height={125} />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="firstName" className="mb-1 text-sm font-semibold text-gray-700">
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="lastName" className="mb-1 text-sm font-semibold text-gray-700">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="address" className="mb-1 text-sm font-semibold text-gray-700">
                        Adresse
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="city" className="mb-1 text-sm font-semibold text-gray-700">
                        Ville
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                    />
                </div>

                <div className="flex flex-col mb-4 relative">
                    <label htmlFor="description" className="mb-1 text-sm font-semibold text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={userData.description}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                        rows={3}
                        maxLength={500}
                    />
                    <div className="absolute bottom-1 right-2 text-sm text-gray-500">
                        {userData.description.length} / 500
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="birthdate" className="mb-1 text-sm font-semibold text-gray-700">
                        Anniversaire
                    </label>
                    <input
                        type="text"
                        id="birthdate"
                        name="birthdate"
                        value={userData.birthdate}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-700">
                        Email (non modifiable)
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        disabled
                        className="px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="password" className="mb-1 text-sm font-semibold text-gray-700">
                        Mot de passe
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute inset-y-0 right-0 flex items-center ml-2 text-gray-500"
                        >
                            {showPassword ? 'Masquer' : 'Afficher'}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <label htmlFor="phone" className="mb-1 text-sm font-semibold text-gray-700">
                        Numéro de téléphone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-principale-700"
                    />
                </div>

            </div>
            <div className="w-full flex justify-around mt-4">
                <Link href={`/mention-legal`} className=" w-14 h-14 rounded-full bg-principale-700 border-secondaire-500 border-2 flex justify-center items-center">
                    <Image
                        src={mentionOrange}
                        alt="mention légales"
                        width="50"
                        height="50"
                    />
                </Link>
                <button className=" w-14 h-14 rounded-full bg-principale-700 border-secondaire-500 border-2 flex justify-center items-center">
                    <Image
                        src={deleteOrange}
                        alt="Delete account"
                        width="42"
                        height="42"
                    />
                </button>
                <Link href={`/connexion`} onClick={handleLogout} className=" w-14 h-14 rounded-full bg-principale-700 border-secondaire-500 border-2 flex justify-center items-center">
                    <Image
                        src={deconnexionOrange}
                        alt="déconnexion"
                        width="30"
                        height="30"
                        className='ml-2'
                    />
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;
