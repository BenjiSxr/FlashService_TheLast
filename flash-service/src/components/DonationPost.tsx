/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

type IProps = {
  imageURL: string;
  title: string;
  current_fp: number;
  total_fp: number;
};
const DonationPost: FC<IProps> = (props) => {
  const { imageURL, title, current_fp, total_fp } = props;

  return (
    <div className="flex flex-col justify-center items-center border-black border-2 rounded-md ">
      <div className="flex flex-col justify-center items-center w-[100%] h-[100%] p-2 max-w-96 overflow-hidden">
        <img className="rounded" src={imageURL} alt="Photo Association" />
      </div>
      <div className="w-full h-1/2 border-b-2 border-black z-0"></div>
      <div className=" w-full flex flex-col p-3">
        <div className="w-full flex flex-col justify-items-center">
          <div className="w-full flex justify-center items-center font-bold text-2xl">
            {title}
          </div>
          <div className="w-full text-md h-12 justify-start">Lorem ipsum</div>
        </div>
        <div className="w-full flex flex-row justify-center items-center ">
          <div className="w-full max-w-lg bg-slate-300 rounded-full h-8 mx-1">
            <div
              className="h-full bg-gradient-to-r from-green-300 to-green-600 rounded-full"
              style={{ width: `${(current_fp / total_fp) * 100}%` }}
            ></div>
          </div>
          <button className="flex justify-center items-center bg-slate-900 text-amber-500 px-4 rounded-lg min-w-fit h-8 mx-1 font-bold">
            Don
          </button>
        </div>
      </div>
    </div>
  );
};

export { DonationPost };
