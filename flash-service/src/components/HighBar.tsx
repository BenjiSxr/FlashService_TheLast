"use client";

import { FC } from "react";
import { FlashPoint } from "./FlashPoint";
import profile from "@/image/test.jpg";
import { ProfileImg } from "./ProfileImg";
import Link from "next/link";
import { useAuth } from "@/context/UserContext";


const HighBar: FC = () => {
  const { user } = useAuth();
  return (
    <div className="w-screen bg-principale-700 max-h-14 flex justify-between items-center">
      <div className="m-2 w-1/6 min-w-20">
        <FlashPoint point="1800"></FlashPoint>
      </div>
      <h1 className="text-secondaire-500 text-xl font-bold">FlashService</h1>
      <div className="m-2 w-1/6 flex justify-center">
        {user.id === 0 ? (
          <></>
        ) : (
          <Link href={`/my-profile`}>
            <ProfileImg img={profile} width={40} height={40} />
          </Link>
        )}
      </div>
    </div>
  );
};

export { HighBar };
