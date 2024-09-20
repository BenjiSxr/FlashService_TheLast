"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface ServiceData {
    image: File | null;
    title: string;
    duration: string;
    description: string;
}

const NewService: React.FC = () => {
    const [serviceData, setServiceData] = useState<ServiceData>({
        image: null,
        title: '',
        duration: '',
        description: '',
    });
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setServiceData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;

        if (input.files && input.files.length > 0) {
            const selectedFile = input.files[0];
            setServiceData((prev) => ({
                ...prev,
                image: selectedFile,
            }));
        }
    };

    useEffect(() => {
        if (serviceData.image) {
            const objectUrl = URL.createObjectURL(serviceData.image);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [serviceData.image]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(serviceData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto pb-2 pt-4 pl-4 pr-4 bg-white shadow-md rounded-md">
            <div className="flex items-center justify-center w-90 mb-4">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                    {preview ? (
                        <img src={preview} alt="Aperçu" className="object-cover w-full h-full rounded-lg" />
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-4">
                            <svg
                                className="w-8 h-8 mb-2 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-1 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
                        </div>
                    )}
                    <input
                        id="dropzone-file"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            </div>

            <div className="flex flex-col mb-2">
                <label htmlFor="title" className="mb-1 text-sm font-semibold text-gray-700">
                    Titre du service
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={serviceData.title}
                    onChange={handleChange}
                    required
                    className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Entrez le titre de votre service"
                />
            </div>

            <div className="flex flex-col mb-2">
                <label htmlFor="duration" className="mb-1 text-sm font-semibold text-gray-700">
                    Durée estimée
                </label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={serviceData.duration}
                    onChange={handleChange}
                    required
                    className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Ex: 2 heures"
                />
            </div>

            <div className="flex flex-col mb-4">
                <label htmlFor="description" className="mb-1 text-sm font-semibold text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={serviceData.description}
                    onChange={handleChange}
                    required
                    className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Décrivez votre service"
                    rows={3}
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full px-4 py-2 font-semibold bg-slate-900 text-amber-500 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                Créer le service
            </button>
        </form>
    );
};

export default NewService;
