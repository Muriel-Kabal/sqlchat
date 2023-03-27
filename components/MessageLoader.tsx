import { useEffect, useState } from "react";
import Icon from "./Icon";

const MessageLoader = () => {
  const [loader, setLoader] = useState<string>(".");

  useEffect(() => {
    setTimeout(() => {
      if (loader.length === 3) {
        setLoader(".");
      } else {
        setLoader(loader + ".");
      }
    }, 300);
  }, [loader]);

  return (
    <div className={`w-full max-w-full flex flex-row justify-start items-start my-4 pr-8 sm:pr-24`}>
      <div className="w-10 h-10 p-1 border rounded-full flex justify-center items-center mr-2 shrink-0">
        <Icon.AiOutlineRobot className="w-6 h-6" />
      </div>
      <div className="mt-0.5 w-12 bg-gray-100 px-4 py-2 rounded-lg rounded-tl-none shadow">{loader}</div>
    </div>
  );
};

export default MessageLoader;
