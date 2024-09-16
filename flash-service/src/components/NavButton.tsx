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
          ? " text-black bg-amber-500 w-screen min-h-10 max-h-14 flex justify-center items-center p-2"
          : " bg-slate-900 text-amber-500 w-screen min-h-10 max-h-14 flex justify-center items-center p-2"
      }
    >
      <Link className="w-full" href={`/${link}`}>
        <button className=" rounded w-full  flex justify-center items-center flex-col">
          <Image
            src={icone}
            alt="icone"
            width={30}
            height={30}
            className="text-amber-500"
          />
          <p className="text-xs">{label}</p>
        </button>
      </Link>
    </div>
  );
};

export { NavButton };
