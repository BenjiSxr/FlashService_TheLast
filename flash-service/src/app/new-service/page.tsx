"use client";

import React from "react";
import CreateNewService from "../../components/CreateNewService";

export default function NewService() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h1 className="text-2xl font-bold text-center mb-8">Créer un nouveau service</h1>
            <CreateNewService />
        </div>
    );
}
