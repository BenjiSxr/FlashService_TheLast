"use client";

import { FC, useState } from "react";

type IProps = {
    user: string;
    title: string;
    desc: string;
};

type RequestListProps = {
    label: string;
    count: number;
    total: number;
    itemLabel: string;
    requests: IProps[];
};

const RequestList: FC<RequestListProps> = ({ label, count, total, itemLabel, requests }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="w-full my-3 p-4 border rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">{label}</span>
                <span className="text-sm font-medium">{`${count}/${total}`}</span>
            </div>
            <div className="space-y-2">
                {requests.map((request, index) => (
                    <div key={index} className="border p-3 rounded-md">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleDescription(index)}
                        >
                            <span className="font-medium">{`${itemLabel} ${index + 1} - ${request.title}`}</span>
                            <button
                                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                            >
                                ▼
                            </button>
                        </div>
                        {openIndex === index && (
                            <div className="mt-2 text-sm text-gray-600">
                                <p><strong>Créé par:</strong> {request.user}</p>
                                <p>{request.desc}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RequestList;