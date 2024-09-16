import { FC } from "react";
import Link from "next/link";

type IProps = {
  label: string;
  link: string;
};

const NavButton: FC<IProps> = (props) => {
  const { label, link } = props;
  return (
    <div className="w-screen bg-red-500 min-h-10 max-h-14 flex justify-center items-center">
      <Link href={`/${link}`}>
        <button className="">
          <p>H</p>
          <p>{label}</p>
        </button>
      </Link>
    </div>
  );
};

export { NavButton };
