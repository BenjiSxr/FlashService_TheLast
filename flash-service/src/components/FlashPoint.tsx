import Image from "next/image";
import { FC } from "react";
import flashpoint from "@/image/flashcoin.png";

type IProps = {
  point: string;
};

const FlashPoint: FC<IProps> = (props) => {
  const { point } = props;
  return (
    <div className="rounded-xl w-fit bg-gray-50 text-center text-s m-3 flex justify-center items-center p-1">
      <p className="w-2/3 mx-1">{point}</p>
      <Image src={flashpoint} alt="flashpoint" width={25} height={25} />
    </div>
  );
};

export { FlashPoint };
