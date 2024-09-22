import { FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type IProps = {
  label: string;
  link: string;
  icone: StaticImageData;
  select: boolean;
};

const NavButton: FC<IProps> = (props) => {
  const { label, link, icone, select } = props;
  return (
    <div
      className={
        select
          ? " text-black bg-secondaire-500 w-screen max-h-16 flex justify-center items-center p-2"
          : " bg-principale-700 text-secondaire-500 w-screen max-h-16 flex justify-center items-center p-2"
      }
    >
      <Link className="w-full" href={`/${link}`}>
        <button className=" rounded w-full  flex justify-center items-center flex-col">
          <Image
            src={icone}
            alt="icone"
            width={30}
            height={30}
            className="text-secondaire-500"
          />
          <p className="text-xs">{label}</p>
        </button>
      </Link>
    </div>
  );
};

export { NavButton };
