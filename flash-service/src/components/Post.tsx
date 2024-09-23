import { FC } from "react";
import { ProfileImg } from "./ProfileImg";
import profile from "@/image/femme_profile.jpg";
import { Stars } from "./Stars";
import { PostImage } from "./PostImage";
import { PostFlashPoint } from "./PostFlashPoint";

type IProps = {
  user: string,
  title: string,
  desc: string
}


const Post: FC<IProps> = (props) => {
  const { user, title, desc } = props

  return (
    <div className="h-full min-h-[500px] border-black border-2 rounded-xl w-5/6 max-w-[500px]">
      <PostImage />
      <div className="bg-gray-200 p-2 h-1/2 rounded-b-xl flex flex-col justify-between">
        <div className="flex justify-start items-center">
          <div className="m-2">
            <ProfileImg img={profile} width={50} height={50} />
          </div>
          <div>
            <p className="font-bold text-xl flex">{user}</p>
            <Stars />
            <p className="text-xs">24 rue Mercier, Lyon, 69003</p>
          </div>
        </div>
        <div className="my-3 overflow-y-scroll">
          <p className="font-bold text-xl">{title}</p>
          <p className="text-sm ">
            {
              desc
            }
          </p>
        </div>
        <div className="flex justify-between items-center m-1">
          <PostFlashPoint point="18"></PostFlashPoint>
        </div>
      </div>
    </div>
  );
};

export { Post };