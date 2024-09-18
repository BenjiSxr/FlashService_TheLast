import { FC } from "react";

type IProps = {
  label: string;
};

const Button: FC<IProps> = (props) => {
  const { label } = props;
  return (
    <button className="bg-slate-900 text-amber-500 p-2 rounded-lg">
      {label}
    </button>
  );
};

export { Button };
