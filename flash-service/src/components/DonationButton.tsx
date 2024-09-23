"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { FlashPoint } from "./FlashPoint";
import { useFlash } from "@/context/FlashContext";

const DonationButton: FC = () => {
  //Point du profil
  const [donationAmount, setDonationAmount] = useState(0);

  // popUp pour le don
  const [isDonOpen, setIsDonOpen] = useState(false);
  const { fp, setFp } = useFlash();
  const openDon = () => {
    setIsDonOpen(true);
  };

  const closeDon = () => {
    const newfp = fp - donationAmount;
    console.log(`Montant donné : ${donationAmount}`);
    console.log(`Flash Points restants : ${newfp}`);
    setFp(newfp);
    setIsDonOpen(false);
  };

  return (
    <>
      <button
        className="flex justify-center items-center bg-principale-700 text-secondaire-500 border-2 border-amber-200 px-4 rounded-lg min-w-fit h-8 mx-1 font-semibold"
        onClick={openDon}
      >
        Je soutiens
      </button>
      {isDonOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeDon}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md mx-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Faire un don</h2>
              <Image
                src="/images/flashcoin.png"
                alt="Flash Point"
                width={40}
                height={40}
                className="ml-4"
              />
            </div>

            <p className="my-4">
              Votre soutien est précieux pour nous ! Merci de votre générosité.
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Vos Flash Point :
              </label>
              <FlashPoint point={fp.toString()} />
            </div>

            <div className="mb-4">
              <label
                htmlFor="donationAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Montant à donner (Flash Point) :
              </label>
              <input
                id="donationAmount"
                type="number"
                min="0"
                max={fp}
                step="10"
                value={donationAmount}
                onChange={(e) => setDonationAmount(Number(e.target.value))}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={closeDon}
              >
                Confirmer
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
                onClick={closeDon}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { DonationButton };
