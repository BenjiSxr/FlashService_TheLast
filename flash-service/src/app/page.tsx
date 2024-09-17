import { Post } from "@/components/Post";
import { SlideButton } from "@/components/SlideButton";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center w-full h-full flex-col bg-gray-50">
      <div className="flex justify-center items-center w-full h-5/6 py-5 ">
        <Post></Post>
      </div>
      <div className="flex justify-evenly items-center w-full h-1/6">
        <SlideButton valid={false} />
        <SlideButton valid={true} />
      </div>
    </div>
  );
}
