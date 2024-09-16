import { FC } from "react";
import { NavButton } from "./NavButton";

const DownBar: FC = () => {
  return (
    <div className="w-screen bg-blue-800 min-h-12 max-h-16 flex justify-center items-center">
      <NavButton label="Change" link="change"></NavButton>
      <NavButton label="Home" link="change"></NavButton>
      <NavButton label="Liked" link="liked"></NavButton>
      <NavButton label="Create" link="change"></NavButton>
    </div>
  );
};

export { DownBar };
