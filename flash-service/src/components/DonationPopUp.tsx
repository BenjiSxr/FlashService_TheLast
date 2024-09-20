import { useState } from 'react';
import Image from 'next/image';

const InfoButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className="fixed right-6 z-50"
            style={{ bottom: '5rem' }}>
            <button onClick={togglePopup} className="flex items-center justify-center w-8 h-8 bg-slate-400 rounded-full">
                <Image
                    src="/images/information.png"
                    alt="Flash Point"
                    width={40}
                    height={40}
                    className="text-gray-700" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={closePopup}>
                    <div className="bg-white p-6 rounded-lg max-w-md mx-4 shadow-lg"
                        onClick={(e) => e.stopPropagation()}>
                        <p>
                            Les dons représentent uniquement un vote du public. Une fois le vote terminé, un don sera effectué à l'association choisie, selon les revenus de l'application. Participez dès maintenant pour soutenir des causes qui vous tiennent à cœur !
                        </p>
                        <button onClick={togglePopup} className="mt-2 text-blue-500">Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export { InfoButton };
