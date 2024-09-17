import Image from "next/image";
import { FC } from "react";
import jardinnage from "@/image/jardinnage.jpg";
import { ProfileImg } from "./ProfileImg";
import profile from "@/image/femme_profile.jpg";
import { Stars } from "./Stars";
const Post: FC = () => {
  return (
    <div className="h-full border-black border-2 rounded-xl m-5 overflow-hidden">
      <div className="w-full border-b-2 border-black">
        <Image
          src={jardinnage}
          alt="post image"
          // fill={true}
          width={500}
          height={500}
          className="rounded-t-xl"
        />
      </div>
      <div className="bg-gray-200 p-2 h-5/6">
        <div className="flex justify-start items-center">
          <div className="m-2">
            <ProfileImg img={profile} width={50} height={50} />
          </div>
          <div>
            <p className="font-bold text-xl flex">
              Sarah
              <Stars />
            </p>
            <p className="text-xs">24 rue Mercier, Lyon, 69003</p>
          </div>
        </div>
        <div className="my-3">
          <p className="font-bold text-xl">Arroser mes plantes</p>
          <p className="text-sm">
            {
              "Je pars en vacances, j'aurais besoin d'une personne pour s'occuper de mes plantes."
            }
          </p>
        </div>
        <div className="flex justify-between items-center m-2">
          <button className="bg-slate-900 text-amber-500 p-2 rounded-lg">
            +18 pts
          </button>
          <button className="bg-slate-900 text-amber-500 p-2 rounded-lg">
            Accept Job
          </button>
        </div>
      </div>
    </div>
  );
};

export { Post };
