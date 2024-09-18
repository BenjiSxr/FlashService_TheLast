import { FC } from "react";
import { FlashPoint } from "./FlashPoint";
import profile from "@/image/test.jpg";
import { ProfileImg } from "./ProfileImg";

const HighBar: FC = () => {
  return (
    <div className="w-screen bg-slate-900 max-h-14 flex justify-between items-center">
      <FlashPoint point="1800"></FlashPoint>
      <h1 className="text-amber-500 text-xl font-bold">FlashService</h1>
      <div className="m-5">
        <ProfileImg img={profile} width={40} height={40} />
      </div>
    </div>
  );
};

export { HighBar };
