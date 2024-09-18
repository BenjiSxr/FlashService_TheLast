import Image from "next/image";
import { FC } from "react";
import croix from "@/image/croix-blanche.png";
import coeur from "@/image/corazon-blanc.png";

type IProps = {
  valid: boolean;
};

const SlideButton: FC<IProps> = (props) => {
  const { valid } = props;
  return (
    <button
      className={
        valid
          ? "border-8 border-green-200 w-20 h-20 bg-green-700 rounded-full flex justify-center items-center"
          : "border-8 border-red-200 w-20 h-20 bg-red-700 rounded-full flex justify-center items-center"
      }
    >
      <Image src={valid ? coeur : croix} alt="button" width={30} height={30} />
    </button>
  );
};

export { SlideButton };
