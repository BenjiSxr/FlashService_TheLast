import React from 'react';

interface CNSCategoryProps {
    categories: string[];
    onSelectCategory: (category: string) => void;
    onClose: () => void;
}

const CNSCategory: React.FC<CNSCategoryProps> = ({ categories, onSelectCategory, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-lg w-3/4 max-w-md">
                <h2 className="text-xl font-bold mb-4">Choisir une catégorie</h2>
                <div className="grid grid-cols-1 gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className="py-2 px-4 bg-principale-700 text-white rounded-md focus:outline-none hover:bg-principale-500 transition"
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 py-2 px-4 bg-gray-300 text-black rounded-md focus:outline-none hover:bg-gray-400 transition"
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default CNSCategory;
