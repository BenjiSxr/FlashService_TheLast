/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState, useEffect } from "react";
import { DonationButton } from "./DonationButton";
import { InfoButton } from "./DonationPopUp";

type IProps = {
  imageURL: string;
  title: string;
  description: string;
  current_fp: number;
  total_fp: number;
};

const DonationPost: FC<IProps> = (props) => {
  const { imageURL, title, description, current_fp, total_fp } = props;

  // Animation progess bar
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((current_fp / total_fp) * 100);
    }, 250); // en ms

    return () => clearTimeout(timer);
  }, [current_fp, total_fp]);

  return (
    <div className="flex flex-col justify-center items-center border-black border-2 rounded-md ">
      <div className="flex flex-col justify-center items-center w-[100%] h-[100%] p-2 max-w-96 overflow-hidden">
        <img className="rounded" src={imageURL} alt="Photo Association" />
      </div>
      <div className="w-full h-1/2 border-b-2 border-black z-0"></div>
      <div className=" w-full flex flex-col p-3">
        <div className="w-full flex flex-col justify-items-center">
          <div className="w-full flex justify-center items-center font-bold text-2xl">
            {title}
          </div>
          <div className="w-full text-md h-24 my-2 justify-start overflow-y-scroll">
            {description}
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center ">
          <div className="w-full max-w-lg bg-slate-300 rounded-full h-8 mx-1">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                background: `linear-gradient(45deg, #FBBF24, #16A34A)`, // Amber-200 et Green-600
                boxShadow: '0 0 10px rgba(251, 191, 36, 0.3), 0 0 20px rgba(251, 191, 36, 0.3), 0 0 30px rgba(22, 163, 74, 0.3), 0 0 40px rgba(22, 163, 74, 0.3)',
                width: `${progress}%`
              }}
            ></div>
          </div>
          <DonationButton />
        </div>
      </div>
      <InfoButton />
    </div>
  );
};
export { DonationPost };
