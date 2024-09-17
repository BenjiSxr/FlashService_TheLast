import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type IProps = {
  img: StaticImageData;
  width: number;
  height: number;
};

const ProfileImg: FC<IProps> = (props) => {
  const { img, width, height } = props;
  return (
    <Image
      src={img}
      alt="profile"
      width={width}
      height={height}
      className="rounded-full border-white border-2"
    />
  );
};

export { ProfileImg };
