"use client";

import React from "react";
import CreateNewService from "../../components/CreateNewService";

export default function NewService() {
    return (
        <div className="h-full flex flex-col justify-center items-center bg-gray-100 px-5">
            <CreateNewService />
        </div>
    );
}
