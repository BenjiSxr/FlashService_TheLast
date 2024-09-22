import { FC } from "react";

type IProps = {
  label: string;
};

const PostButton: FC<IProps> = (props) => {
  const { label } = props;
  return (
    <button className="bg-principale-700 text-secondaire-500 p-2 rounded-lg">
      {label}
    </button>
  );
};

export { PostButton };
