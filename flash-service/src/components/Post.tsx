import { FC } from "react";
import { ProfileImg } from "./ProfileImg";
import profile from "@/image/femme_profile.jpg";
import { Stars } from "./Stars";
import { PostImage } from "./PostImage";
const Post: FC = () => {
  return (
    <div className="h-full min-h-[500px] border-black border-2 rounded-xl w-5/6 max-w-[500px]">
      <PostImage />
      <div className="bg-gray-200 p-2 h-1/2 rounded-b-xl flex flex-col justify-between">
        <div className="flex justify-start items-center">
          <div className="m-2">
            <ProfileImg img={profile} width={50} height={50} />
          </div>
          <div>
            <p className="font-bold text-xl flex">Sarah</p>
            <Stars />
            <p className="text-xs">24 rue Mercier, Lyon, 69003</p>
          </div>
        </div>
        <div className="my-3 overflow-y-scroll">
          <p className="font-bold text-xl">Arroser mes plantes</p>
          <p className="text-sm ">
            {
              "Je pars en vacances, j'aurais besoin d'une personne pour s'occuper de mes plantes."
            }
          </p>
        </div>
        <div className="flex justify-between items-center m-1">
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
