import Image from "next/image";
import { FC } from "react";
import flashpoint from "@/image/flashpoint.png";

type IProps = {
  point: string;
};

const FlashPoint: FC<IProps> = (props) => {
  const { point } = props;
  return (
    <div className="rounded-xl w-16 bg-white text-center text-s m-3 flex justify-center items-center">
      <p className="w-2/3">{point}</p>
      <Image src={flashpoint} alt="flashpoint" width={20} height={20} />
    </div>
  );
};

export { FlashPoint };
