import Image from "next/image";
import { FC } from "react";
import jardinnage from "@/image/jardinnage.jpg";

const PostImage: FC = () => {
  return (
    <div className="w-full h-1/2 border-b-2 border-black z-0">
      <Image
        src={jardinnage}
        alt="post image"
        // fill={true}
        className="rounded-t-xl w-full h-full"
      />
    </div>
  );
};

export { PostImage };
